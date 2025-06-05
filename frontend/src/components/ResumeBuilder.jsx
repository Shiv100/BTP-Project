/*import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Achievements from './Achievements';
import Hobbies from './Hobbies';
import Skills from './Skills'; // Import the new Skills component
import ResumePreview from './ResumePreview';

function ResumeBuilder() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: [],
        projects: [],
        skills: [], // Initial empty skills array
        achievements: '',
        hobbies: '',
    });

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Resume Builder</h2>
            <PersonalInfo data={data} setData={setData} />
            <Education data={data} setData={setData} />
            <Experience data={data} setData={setData} />
            <Projects data={data} setData={setData} />
            <Skills data={data} setData={setData} /> {/* Add Skills section *///}
           /* <Achievements data={data} setData={setData} />
            <Hobbies data={data} setData={setData} />
            <ResumePreview data={data} />
        </div>
    );
}
*/
//export default ResumeBuilder;
/*
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Achievements from './Achievements';
import Hobbies from './Hobbies';
import Skills from './Skills'; // Import the new Skills component
import ResumePreview from './ResumePreview';

function ResumeBuilder() {
    // Existing state and components...
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: [],
        projects: [],
        skills: [], // Initial empty skills array
        achievements: '',
        hobbies: '',
    });

    const handleDownload = () => {
        const input = document.getElementById('resumePreview');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('resume.pdf');
        });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Resume Builder</h2>
            <PersonalInfo data={data} setData={setData} />
            <Education data={data} setData={setData} />
            <Experience data={data} setData={setData} />
            <Projects data={data} setData={setData} />
            <Skills data={data} setData={setData} />
            <Achievements data={data} setData={setData} />
            <Hobbies data={data} setData={setData} />
            <div id="resumePreview">
                <ResumePreview data={data} />
            </div>
            <button
                onClick={handleDownload}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Download Resume
            </button>
        </div>
    );
}

export default ResumeBuilder;*/
/*
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Achievements from './Achievements';
import Hobbies from './Hobbies';
import SoftSkills from './SoftSkills';
import Courses from './Courses';
import ResumePreview from './ResumePreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ResumeBuilder() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        profilePhoto: '',
        education: [],
        experience: [],
        projects: [],
        Skills: [],
        softSkills: [],
        courses: [],
        achievements: '',
        hobbies: [],
    });

    const handleDownload = () => {
        const input = document.getElementById('resumePreview');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('resume.pdf');
        });
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Resume Builder</h2>
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                    <PersonalInfo data={data} setData={setData} />
                    <Education data={data} setData={setData} />
                    <Experience data={data} setData={setData} />
                    <Projects data={data} setData={setData} />
                    <Skills data={data} setData={setData} />
                    <SoftSkills data={data} setData={setData} />
                    <Courses data={data} setData={setData} />
                    <Achievements data={data} setData={setData} />
                    <Hobbies data={data} setData={setData} />
                </div>
                <ResumePreview data={data} />
            </div>
            <div className="text-center mt-8">
                <button onClick={handleDownload} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                    Download Resume
                </button>
            </div>
        </div>
    );
}

export default ResumeBuilder;*/


import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import SoftSkills from './SoftSkills';
import Courses from './Courses';
import Achievements from './Achievements';
import Hobbies from './Hobbies';
import ResumePreview from './ResumePreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ResumeBuilder() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        profilePhoto: '',
        education: [],
        experience: [],
        projects: [],
        skills: [],
        softSkills: [],
        courses: [],
        achievements: '',
        hobbies: [],
    });

    const handleDownload = () => {
        const input = document.getElementById('resumePreview');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('resume.pdf');
        });
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Resume Builder</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <PersonalInfo data={data} setData={setData} />
                    <Education data={data} setData={setData} />
                    <Experience data={data} setData={setData} />
                    <Projects data={data} setData={setData} />
                    <Skills data={data} setData={setData} />
                    <SoftSkills data={data} setData={setData} />
                    <Courses data={data} setData={setData} />
                    <Achievements data={data} setData={setData} />
                    <Hobbies data={data} setData={setData} />
                </div>
                <ResumePreview data={data} />
            </div>
            <div className="text-center mt-8">
                <button onClick={handleDownload} className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                    Download Resume
                </button>
            </div>
        </div>
    );
}

export default ResumeBuilder;

