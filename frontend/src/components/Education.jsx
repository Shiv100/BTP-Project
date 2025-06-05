/*import React from 'react';

function Education({ data, setData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, education: value });
    };

    return (
        <div>
            <label className="block">Education:</label>
            <textarea
                name="education"
                value={data.education}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
        </div>
    );
}

export default Education;*/


import React, { useState } from 'react';

function Education({ data, setData }) {
    const [educationEntry, setEducationEntry] = useState({
        degree: '',
        institute: '',
        year: '',
        percentage: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationEntry({ ...educationEntry, [name]: value });
    };

    const addEducation = () => {
        setData({
            ...data,
            education: [...data.education, educationEntry],
        });
        setEducationEntry({ degree: '', institute: '', year: '', percentage: '' });
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Education</h3>
            <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={educationEntry.degree}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                name="institute"
                placeholder="Institute"
                value={educationEntry.institute}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                name="year"
                placeholder="Year"
                value={educationEntry.year}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                name="percentage"
                placeholder="Percentage"
                value={educationEntry.percentage}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <button
                onClick={addEducation}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Education
            </button>
        </div>
    );
}

export default Education;

