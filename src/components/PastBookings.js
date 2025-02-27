// src/components/PastBookings.js
import React, { useEffect, useState } from 'react';

const PastBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const pastBookings = await getPastBookings(); // Fetch past bookings from an API
            setBookings(pastBookings);
        };

        fetchBookings();
    }, []);

    return (
        <div className="past-bookings">
            <h2>Past Bookings</h2>
            {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                    <div key={index}>
                        <h3>{booking.roomType}</h3>
                        <p>{booking.date}</p>
                    </div>
                ))
            ) : (
                <p>No past bookings found.</p>
            )}
        </div>
    );
};

export default PastBookings;
