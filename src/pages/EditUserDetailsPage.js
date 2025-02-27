// src/pages/EditUserDetailsPage.js
import React from 'react';
import EditUserDetails from '../components/EditUserDetails'; // Import EditUserDetails component

const EditUserDetailsPage = () => {
    const handleEditComplete = () => {
        // Logic after editing is complete, e.g., redirect or show a message
        alert('User details updated successfully!');
    };

    return (
        <div className="edit-user-details-page">
            <h1>Edit User Details</h1>
            <EditUserDetails onEditComplete={handleEditComplete} /> {/* Pass callback function */}
        </div>
    );
};

export default EditUserDetailsPage;
