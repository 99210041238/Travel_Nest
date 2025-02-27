// src/pages/HotelDetailsPage.js
import React from 'react';
import HotelDetails from '../components/HotelDetails';
import { useParams } from 'react-router-dom';

const HotelDetailsPage = () => {
    const { id } = useParams(); // Extract hotel ID from URL params
    const hotel = { // Replace with API call to fetch hotel details
        id: id,
        name: 'Hotel Sunshine',
        description: 'A bright and sunny place.',
        price: 100,
        roomType: 'Deluxe',
    };

    return (
        <div className="hotel-details-page">
            <h2>{hotel.name}</h2>
            <HotelDetails hotel={hotel} />
        </div>
    );
};

export default HotelDetailsPage;
