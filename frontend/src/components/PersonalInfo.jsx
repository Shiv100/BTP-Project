/*import React from 'react';

function PersonalInfo({ data, setData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <div>
            <label className="block">Name:</label>
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <label className="block">Email:</label>
            <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <label className="block">Phone:</label>
            <input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
        </div>
    );
}

export default PersonalInfo;*/

/*
import React from 'react';

function PersonalInfo({ data, setData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setData({ ...data, profilePhoto: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h3 className="font-bold">Personal Information</h3>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={data.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2"
            />
            <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="mt-2"
            />
        </div>
    );
}

export default PersonalInfo;*/


import React from 'react';

function PersonalInfo({ data, setData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setData({ ...data, profilePhoto: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={data.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={data.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full p-2 border rounded"
            />
        </div>
    );
}

export default PersonalInfo;


