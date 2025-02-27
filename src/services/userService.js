// src/services/userService.js
const API_URL = 'http://localhost:5000/api/users'; // Adjust the URL based on your backend setup

// Update user details
export const updateUserDetails = async (userId, userDetails) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating user details:', error);
        throw error;
    }
};

// Get user details
export const getUserDetails = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};
