/*import React from 'react';

function Hobbies({ data, setData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, hobbies: value });
    };

    return (
        <div>
            <label className="block">Hobbies:</label>
            <textarea
                name="hobbies"
                value={data.hobbies}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
        </div>
    );
}

export default Hobbies;*/

import React, { useState } from 'react';

function Hobbies({ data, setData }) {
    const [hobby, setHobby] = useState('');

    const handleChange = (e) => {
        setHobby(e.target.value);
    };

    const addHobby = () => {
        if (hobby) {
            setData({
                ...data,
                hobbies: [...data.hobbies, hobby],
            });
            setHobby('');
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hobbies</h3>
            <input
                type="text"
                placeholder="Add a hobby"
                value={hobby}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <button
                onClick={addHobby}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Hobby
            </button>
        </div>
    );
}

export default Hobbies;

