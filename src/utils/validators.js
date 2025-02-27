// src/services/validator.js

// Function to validate email addresses
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Function to validate password (minimum 8 characters, at least one number and one special character)
export const isValidPassword = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
};

// Function to check if a field is not empty
export const isNotEmpty = (value) => {
    return value && value.trim() !== '';
};

// Function to validate phone numbers (example: supports 10-digit US numbers)
export const isValidPhoneNumber = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
};
