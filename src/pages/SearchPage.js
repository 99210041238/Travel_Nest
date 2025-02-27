import React, { useState, useEffect } from 'react';

// Sample fetching function (if you're fetching data)
const SearchPage = () => {
    const [hotels, setHotels] = useState([]); // Initialize as an empty array

    useEffect(() => {
        // Simulate fetching data (replace this with your actual fetch code)
        const fetchHotels = async () => {
            const response = await fetch('/api/hotels'); // Replace with your API endpoint
            const data = await response.json();
            setHotels(data);
        };

        fetchHotels();
    }, []);

    // Render hotels only if the data is available
    return (
        <div>
            <h1>Hotel Search</h1>
            <div>
                {hotels.length === 0 ? (
                    <p>No hotels found.</p>
                ) : (
                    hotels.map((hotel, index) => (
                        <div key={index}>
                            <h2>{hotel.name}</h2>
                            <p>{hotel.address}</p>
                            {/* You can add more hotel details here */}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchPage;
