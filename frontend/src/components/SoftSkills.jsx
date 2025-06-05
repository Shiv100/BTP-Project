import React, { useState } from 'react';

function SoftSkills({ data, setData }) {
    const [skill, setSkill] = useState('');

    const handleChange = (e) => {
        setSkill(e.target.value);
    };

    const addSkill = () => {
        if (skill) {
            setData({
                ...data,
                softSkills: [...data.softSkills, skill],
            });
            setSkill('');
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Soft Skills</h3>
            <input
                type="text"
                placeholder="Add a soft skill"
                value={skill}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <button
                onClick={addSkill}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Soft Skill
            </button>
        </div>
    );
}

export default SoftSkills;
