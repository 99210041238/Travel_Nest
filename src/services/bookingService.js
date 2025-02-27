// src/services/bookingService.js
const API_URL = 'http://localhost:5000/api/bookings'; // Adjust the URL based on your backend setup

// Create a booking
export const createBooking = async (bookingData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};

// Get user's past bookings
export const getPastBookings = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/user/${userId}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching past bookings:', error);
        throw error;
    }
};
