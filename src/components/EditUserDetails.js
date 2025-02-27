// src/components/EditUserDetails.js
import React, { useState } from 'react';

const EditUserDetails = ({ onEditComplete }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle editing logic here
        onEditComplete(username, email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditUserDetails;
