/*import React from 'react';

function Experience({ data, setData }) {
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newExperience = [...data.experience];
        newExperience[index][name] = value;
        setData({ ...data, experience: newExperience });
    };

    const handleAddExperience = () => {
        setData({
            ...data,
            experience: [
                ...data.experience,
                { jobTitle: '', company: '', duration: '', description: '' },
            ],
        });
    };

    const handleDeleteExperience = (index) => {
        const newExperience = data.experience.filter((_, i) => i !== index);
        setData({ ...data, experience: newExperience });
    };

    return (
        <div>
            <h3 className="font-bold">Experience</h3>
            {data.experience.map((exp, index) => (
                <div key={index} className="space-y-4">
                    <input
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={exp.jobTitle}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration"
                        value={exp.duration}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={exp.description}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full p-2 border rounded"
                    />
                    <button
                        type="button"
                        onClick={() => handleDeleteExperience(index)}
                        className="text-red-500"
                    >
                        Delete Experience
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={handleAddExperience}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
                Add Experience
            </button>
        </div>
    );
}

export default Experience;*/



import React, { useState } from 'react';

function Experience({ data, setData }) {
    const [experienceEntry, setExperienceEntry] = useState({
        jobTitle: '',
        company: '',
        duration: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperienceEntry({ ...experienceEntry, [name]: value });
    };

    const addExperience = () => {
        setData({
            ...data,
            experience: [...data.experience, experienceEntry],
        });
        setExperienceEntry({ jobTitle: '', company: '', duration: '', description: '' });
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Experience</h3>
            <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={experienceEntry.jobTitle}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                name="company"
                placeholder="Company"
                value={experienceEntry.company}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={experienceEntry.duration}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <textarea
                name="description"
                placeholder="Description"
                value={experienceEntry.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <button
                onClick={addExperience}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Experience
            </button>
        </div>
    );
}

export default Experience;

