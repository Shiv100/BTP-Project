/*import React from 'react';

function Projects({ data, setData }) {
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newProjects = [...data.projects];
        newProjects[index][name] = value;
        setData({ ...data, projects: newProjects });
    };

    const handleAddProject = () => {
        setData({
            ...data,
            projects: [
                ...data.projects,
                { projectTitle: '', description: '', link: '' },
            ],
        });
    };

    const handleDeleteProject = (index) => {
        const newProjects = data.projects.filter((_, i) => i !== index);
        setData({ ...data, projects: newProjects });
    };

    return (
        <div>
            <h3 className="font-bold">Projects</h3>
            {data.projects.map((proj, index) => (
                <div key={index} className="space-y-4">
                    <input
                        type="text"
                        name="projectTitle"
                        placeholder="Project Title"
                        value={proj.projectTitle}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={proj.description}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="link"
                        placeholder="Project Link"
                        value={proj.link}
                        onChange={(e) => handleChange(e, index)}
                        className="w-full p-2 border rounded"
                    />
                    <button
                        type="button"
                        onClick={() => handleDeleteProject(index)}
                        className="text-red-500"
                    >
                        Delete Project
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={handleAddProject}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
                Add Project
            </button>
        </div>
    );
}

export default Projects;*/


import React, { useState } from 'react';

function Projects({ data, setData }) {
    const [projectEntry, setProjectEntry] = useState({
        projectTitle: '',
        description: '',
        link: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectEntry({ ...projectEntry, [name]: value });
    };

    const addProject = () => {
        setData({
            ...data,
            projects: [...data.projects, projectEntry],
        });
        setProjectEntry({ projectTitle: '', description: '', link: '' });
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Projects</h3>
            <input
                type="text"
                name="projectTitle"
                placeholder="Project Title"
                value={projectEntry.projectTitle}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <textarea
                name="description"
                placeholder="Description"
                value={projectEntry.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                name="link"
                placeholder="Project Link"
                value={projectEntry.link}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <button
                onClick={addProject}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Project
            </button>
        </div>
    );
}

export default Projects;

