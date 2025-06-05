/*import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Button } from './ui/button';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleAnalyze = async () => {
    if (!file) return alert('Please upload your resume.');
    setLoading(true);

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post('/api/resume/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setAnalysis(response.data);
    } catch (error) {
      console.error(error);
      alert('Error analyzing resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Resume Analyzer</h1>

        <div className="border-2 border-dashed rounded-lg p-8 bg-white shadow-sm">
          <div
            {...useDropzone({ onDrop })}
            className="flex flex-col items-center justify-center h-32 border-2 border-gray-300 border-dashed rounded-md bg-gray-100"
          >
            {file ? (
              <p className="text-sm font-medium text-gray-600">{file.name}</p>
            ) : (
              <p className="text-sm font-medium text-gray-600">
                Drag & Drop your resume here, or click to upload.
              </p>
            )}
          </div>
          <Button
            onClick={handleAnalyze}
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white"
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze Resume'}
          </Button>
        </div>

        {analysis && (
          <div className="mt-8 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Analysis Results</h2>

            <div className="mt-4">
              <p className="text-lg font-medium text-gray-600">
                <strong>Score:</strong> {analysis.analysis.score} / 100
              </p>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-gray-800">Skills Recommendation:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {analysis.analysis.missingSkills.length > 0 ? (
                    analysis.analysis.missingSkills.map((skill, index) => (
                      <li key={index} className="text-sm">
                        {skill}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm">No missing skills detected!</li>
                  )}
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">Job Recommendations:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {analysis.jobRecommendations.length > 0 ? (
                    analysis.jobRecommendations.map((job, index) => (
                      <li key={index} className="text-sm">
                        {job}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm">No job recommendations available.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;*/

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Button } from './ui/button';
import Navbar from './shared/Navbar';

import { RESUME_API_END_POINT } from '@/utils/constant';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  const handleAnalyze = async () => {
    if (!file) return alert('Please upload your resume.');
    setLoading(true);

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post(`${RESUME_API_END_POINT}/analyze`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      /*
       const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
       */
      console.log("Analysis Result:", response.data);
      setAnalysis(response.data);
    } catch (error) {
      console.log(error);
      alert('Error analyzing resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Resume Analyzer</h1>

          <div className="border-2 border-dashed rounded-lg p-8 bg-white shadow-sm">
            {/* Drag and Drop Zone */}
            <div
              {...useDropzone({ onDrop })}
              className="flex flex-col items-center justify-center h-32 border-2 border-gray-300 border-dashed rounded-md bg-gray-100"
            >
              {file ? (
                <p className="text-sm font-medium text-gray-600">{file.name}</p>
              ) : (
                <p className="text-sm font-medium text-gray-600">
                  Drag & Drop your resume here, or click to upload.
                </p>
              )}
            </div>

            {/* Upload Button */}
            <div className="mt-4 flex justify-center">
              <label htmlFor="fileUpload" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Upload Resume
              </label>
              <input
                id="fileUpload"
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
              />
            </div>

            {/* Analyze Button */}
            <Button
              onClick={handleAnalyze}
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze Resume'}
            </Button>
          </div>

          {/* Display Analysis Results */}
          {analysis && (
            <div className="mt-8 p-6 bg-white shadow rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Analysis Results</h2>

              <div className="mt-4">
                <p className="text-lg font-medium text-gray-600">
                  <strong>Score:</strong> {analysis.analysis.score} / 100
                </p>
                <div className="mt-2">
                  <h3 className="text-xl font-semibold text-gray-800">Skills Recommendation:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {analysis.analysis.missingSkills.length > 0 ? (
                      analysis.analysis.missingSkills.map((skill, index) => (
                        <li key={index} className="text-sm">
                          {skill}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm">No missing skills detected!</li>
                    )}
                  </ul>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">Job Recommendations:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {analysis.jobRecommendations.length > 0 ? (
                      analysis.jobRecommendations.map((job, index) => (
                        <li key={index} className="text-sm">
                          {job}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm">No job recommendations available.</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
