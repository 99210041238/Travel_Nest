// src/components/BookingForm.js
import React from 'react';

const BookingForm = ({ room, onBookingConfirmed }) => {
    const handleBooking = () => {
        // Handle booking logic here
        onBookingConfirmed(room.type);
    };

    return (
        <div className="booking-form">
            <h2>Book a Room: {room.type}</h2>
            <button onClick={handleBooking}>Confirm Booking</button>
        </div>
    );
};

export default BookingForm;
