// src/pages/BookingPage.js
import React, { useState } from 'react';
import BookingForm from '../components/BookingForm'; // Import the BookingForm component

const BookingPage = () => {
    const [selectedRoom, setSelectedRoom] = useState(null); // State to hold selected room

    const roomOptions = [
        { type: 'Deluxe AC Room', price: 120, image: '/images/deluxe-ac-room.jpg' },
        { type: 'Family Room (AC)', price: 150, image: '/images/family-room-ac.jpg' },
        { type: 'Single Bed (AC)', price: 90, image: '/images/single-bed-ac.jpg' },
        { type: 'Couple Bed (AC)', price: 110, image: '/images/couple-bed-ac.jpg' },
        { type: 'Standard Non-AC Room', price: 80, image: '/images/standard-non-ac-room.jpg' },
        { type: 'Family Room (Non-AC)', price: 120, image: '/images/family-room-non-ac.jpg' },
        { type: 'Single Bed (Non-AC)', price: 70, image: '/images/single-bed-non-ac.jpg' },
        { type: 'Couple Bed (Non-AC)', price: 90, image: '/images/couple-bed-non-ac.jpg' },
    ]; // Array of room types with images

    const handleRoomSelection = (room) => {
        setSelectedRoom(room); // Set the selected room when user selects
    };

    return (
        <div className="booking-page">
            <h1>Booking Page</h1>
            <p>Select your room and proceed with the booking.</p>
            <div className="room-selection">
                {roomOptions.map((room, index) => (
                    <div key={index} className="room-option" onClick={() => handleRoomSelection(room)}>
                        <h3>{room.type}</h3>
                        <img src={room.image} alt={room.type} className="room-image" /> {/* Display room image */}
                        <p>Price: ${room.price}</p>
                    </div>
                ))}
            </div>
            {selectedRoom && <BookingForm room={selectedRoom} />} {/* Show BookingForm if a room is selected */}
        </div>
    );
};

export default BookingPage;
