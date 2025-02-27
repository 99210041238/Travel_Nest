// src/services/foodService.js
const FOOD_API_URL = 'http://localhost:5000/api/food'; // Adjust the URL based on your backend setup

// Fetch food menu from a particular hotel
export const fetchFoodMenu = async (hotelId) => {
    try {
        const response = await fetch(`${FOOD_API_URL}/menu/${hotelId}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching food menu:', error);
        throw error;
    }
};

// Order food through Zomato or hotel service
export const orderFood = async (orderDetails) => {
    try {
        const response = await fetch(`${FOOD_API_URL}/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        });
        return await response.json();
    } catch (error) {
        console.error('Error placing food order:', error);
        throw error;
    }
};
