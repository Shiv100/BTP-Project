/*import React from 'react';

function Achievements({ data, setData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, achievements: value });
    };

    return (
        <div>
            <label className="block">Achievements:</label>
            <textarea
                name="achievements"
                value={data.achievements}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
        </div>
    );
}

export default Achievements;
*/

import React from 'react';

function Achievements({ data, setData }) {
    const handleChange = (e) => {
        setData({ ...data, achievements: e.target.value });
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Achievements</h3>
            <textarea
                placeholder="Achievements"
                value={data.achievements}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
        </div>
    );
}

export default Achievements;
