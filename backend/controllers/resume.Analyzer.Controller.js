
// old 
/*import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";
import { skillsDatabase } from "../utils/skillsData.js";

// Function to analyze the resume conten
const analyzeResumeContent = (content) => {
  const matchedSkills = [];
  const missingSkills = [];
  const score = Math.floor(Math.random() * (90 - 60 + 1)) + 60; // Random score between 60-90

  skillsDatabase.forEach((skill) => {
    if (content.toLowerCase().includes(skill.toLowerCase())) {
      matchedSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });

  const tips = matchedSkills.length
    ? "Highlight your experience in key projects using technical terms."
    : "Focus on including more technical keywords relevant to the job.";

  return { matchedSkills, missingSkills, score, tips };
};

// Controller for resume upload and analysis
export const analyzeResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No resume file uploaded." });
    }

    // Upload file to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
      folder: "resumes",
    });
    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);


    // Simulate resume content extraction (replace this with actual file reading/analysis logic)
    const content = `Simulated content for ${req.file.originalname}`;
    const { matchedSkills, missingSkills, score, tips } = analyzeResumeContent(content);

    const jobRecommendations = matchedSkills.map((skill) => `Job requiring ${skill}`);
    res.status(200).json({
      analysis: { score, matchedSkills, missingSkills, tips },
      jobRecommendations,
      cloudinaryUrl: cloudResponse.secure_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during resume analysis." });
  }
};*/




// src/controllers/resumeAnalyzerController.js
//import { Configuration, OpenAIApi } from 'openai';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

 export const analyzeResume = async (resumeText) => {
  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',  // Choose the appropriate model
      prompt: `Analyze the following resume and provide a score and improvement suggestions: \n\n${resumeText}`,
      max_tokens: 150,
    });
    console.log(response.choices[0].text);
  } catch (error) {
    console.error('Error analyzing resume:', error);
  }
};
