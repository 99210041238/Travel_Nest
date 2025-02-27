import React, { useState } from 'react';
import SearchBar from '../components/SearchBox'; // Update to match the name of the Search component
import HotelList from '../components/HotelList';
import MapComponent from '../components/Map'; // Ensure you have a Map component

const HomePage = () => {
    const [hotels, setHotels] = useState([]); // This will be populated from an API
    const [selectPosition, setSelectPosition] = useState(null);

    const handleSearch = (location) => {
        // Fetch hotels based on the selected location here
        // For demonstration, log the location
        console.log('Searching for hotels in:', location);

        // Fetch hotels from your API or set the dummy data here
       
    };

    return (
        <div className="home-page">
            <h1>Welcome to Our Accommodation Booking System</h1>
            <SearchBar setSelectPosition={setSelectPosition} onSearch={handleSearch} />
            <MapComponent selectPosition={selectPosition} hotels={hotels} />
            <HotelList hotels={hotels} />
        </div>
    );
};

export default HomePage;