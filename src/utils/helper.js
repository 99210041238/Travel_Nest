// src/services/helper.js

// Function to format dates into a readable string
export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

// Function to handle common API error responses
export const handleApiError = (error) => {
    if (error.response) {
        // Server responded with a status code other than 2xx
        console.error('API Error:', error.response.data);
        return error.response.data.message || 'An error occurred, please try again later.';
    } else if (error.request) {
        // Request was made, but no response received
        console.error('Network Error:', error.request);
        return 'Network error. Please check your connection.';
    } else {
        // Something else happened while making the request
        console.error('Error:', error.message);
        return 'An unexpected error occurred.';
    }
};

// Function to generate a random ID (useful for temporary identifiers)
export const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
};
