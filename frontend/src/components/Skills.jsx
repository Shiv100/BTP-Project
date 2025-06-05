/*import React, { useState } from 'react';

function Skills({ data, setData }) {
    const [skill, setSkill] = useState('');

    const handleSkillChange = (e) => {
        setSkill(e.target.value);
    };

    const handleAddSkill = () => {
        if (skill) {
            setData({
                ...data,
                skills: [...data.skills, skill],
            });
            setSkill(''); // clear input after adding
        }
    };

    const handleDeleteSkill = (index) => {
        const newSkills = data.skills.filter((_, i) => i !== index);
        setData({ ...data, skills: newSkills });
    };

    return (
        <div>
            <h3 className="font-bold">Skills</h3>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={skill}
                    onChange={handleSkillChange}
                    placeholder="Add a skill"
                    className="w-full p-2 border rounded"
                />
                <button
                    type="button"
                    onClick={handleAddSkill}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Add Skill
                </button>
            </div>
            <ul className="list-disc mt-4">
                {data.skills.map((skill, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <span>{skill}</span>
                        <button
                            type="button"
                            onClick={() => handleDeleteSkill(index)}
                            className="text-red-500"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;*/
/*

import React, { useState } from 'react';

function Skills({ data, setData }) {
    const [skill, setSkill] = useState('');

    const handleChange = (e) => {
        setSkill(e.target.value);
    };

    const addSkill = () => {
        if (skill) {
            setData({
                ...data,
                technicalSkills: [...data.technicalSkills, skill],
            });
            setSkill('');
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Skills</h3>
            <input
                type="text"
                placeholder="Add a skill"
                value={skill}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <button
                onClick={addSkill}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Skill
            </button>
        </div>
    );
}

export default Skills;*/


import React, { useState } from 'react';

function Skills({ data, setData }) {
    const [skill, setSkill] = useState('');

    const handleChange = (e) => {
        setSkill(e.target.value);
    };

    const addSkill = () => {
        if (skill) {
            setData({
                ...data,
                skills: [...data.skills, skill],
            });
            setSkill('');
        }
    };

    const deleteSkill = (index) => {
        const newSkills = data.skills.filter((_, i) => i !== index);
        setData({ ...data, skills: newSkills });
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Skills</h3>
            <div className="flex space-x-2">
                <input
                    type="text"
                    placeholder="Add a skill"
                    value={skill}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <button
                    onClick={addSkill}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Skill
                </button>
            </div>
            <ul className="list-disc ml-4">
                {data.skills.map((skill, index) => (
                    <li key={index} className="flex justify-between items-center">
                        {skill}
                        <button
                            onClick={() => deleteSkill(index)}
                            className="text-red-500"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;


