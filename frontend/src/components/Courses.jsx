import React, { useState } from 'react';

function Courses({ data, setData }) {
    const [course, setCourse] = useState('');

    const handleChange = (e) => {
        setCourse(e.target.value);
    };

    const addCourse = () => {
        if (course) {
            setData({
                ...data,
                courses: [...data.courses, course],
            });
            setCourse('');
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Key Courses Taken</h3>
            <input
                type="text"
                placeholder="Add a course"
                value={course}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <button
                onClick={addCourse}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Course
            </button>
        </div>
    );
}

export default Courses;
