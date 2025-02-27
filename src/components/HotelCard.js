// src/components/HotelList.js
import React from 'react';

const HotelList = ({ hotels, onHotelSelect }) => {
    return (
        <div className="hotel-list">
            {hotels.map((hotel) => (
                <div key={hotel.id} className="hotel-item" onClick={() => onHotelSelect(hotel)}>
                    <h3>{hotel.name}</h3>
                    <p>Rating: {hotel.rating}</p>
                </div>
            ))}
        </div>
    );
};

export default HotelList;
