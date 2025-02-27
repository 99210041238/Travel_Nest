// src/components/HotelList.js
import React from 'react';

const HotelList = ({ hotels }) => {
    return (
        <div className="hotel-list">
            <h2>Available Hotels</h2>
            <ul>
                {hotels.map(hotel => (
                    <li key={hotel.id}>
                        <strong>{hotel.name}</strong><br />
                        Rating: {hotel.rating} | Price: ${hotel.price} | Room Type: {hotel.roomType}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HotelList;
