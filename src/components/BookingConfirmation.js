// src/components/BookingConfirmation.js
import React from 'react';

const BookingConfirmation = ({ roomType }) => {
    return (
        <div className="booking-confirmation">
            <h2>Booking Confirmed!</h2>
            <p>Your booking for {roomType} has been successfully confirmed.</p>
        </div>
    );
};

export default BookingConfirmation;
