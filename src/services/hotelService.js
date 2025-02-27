// src/services/hotelService.js
const API_URL = 'http://localhost:5000/api/hotels'; // Adjust the URL based on your backend setup

// Fetch all hotels
export const fetchHotels = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
};

// Fetch hotel details by ID
export const fetchHotelDetails = async (hotelId) => {
    try {
        const response = await fetch(`${API_URL}/${hotelId}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching hotel details:', error);
        throw error;
    }
};
