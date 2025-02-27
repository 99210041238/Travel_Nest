// src/components/HotelDetails.js
import React from 'react';
import BookingForm from './BookingForm';
import FoodOrder from './FoodOrder';

const HotelDetails = ({ hotel }) => {
    const handleBookingConfirmed = (roomType) => {
        alert(`Booking confirmed for ${roomType}`);
    };

    return (
        <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p>{hotel.description}</p>
            <p>Price: ${hotel.price}</p>
            <BookingForm room={{ type: hotel.roomType }} onBookingConfirmed={handleBookingConfirmed} />
            <FoodOrder hotel={hotel} />
        </div>
    );
};

export default HotelDetails;
