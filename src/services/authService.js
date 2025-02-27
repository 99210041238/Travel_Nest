// src/services/authService.js
const API_URL = 'http://localhost:5000/api/auth'; // Adjust the URL based on your backend setup

// Sign Up User
export const signUp = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
};

// Sign In User
export const signIn = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};
