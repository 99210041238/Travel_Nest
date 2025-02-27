import React, { useState } from 'react';
import axios from 'axios';

const NearbyTourism = () => {
    const [city, setCity] = useState('');
    const [places, setPlaces] = useState([]);
    const [images, setImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchPlaces = async () => {
        if (!city.trim()) {
            setErrorMessage('Please enter a valid city name.');
            return;
        }

        setLoading(true);
        setErrorMessage('');
        const googlePlacesApiKey = 'AlzaSyxd4bHPTKS3QUbEiwSKPBp1PYO4Cq5uERP';

        try {
            const response = await axios.get('https://maps.gomaps.pro/maps/api/place/textsearch/json', {
                params: {
                    query: `tourist attractions in ${city}`,
                    key: googlePlacesApiKey,
                },
            });

            const data = response.data;
            if (data.results.length === 0) {
                setErrorMessage('No results found. Please try another city.');
                setPlaces([]);
                setImages([]);
            } else {
                setPlaces(data.results);
                fetchImages(data.results);
            }
        } catch (error) {
            console.error('Error fetching places:', error);
            setErrorMessage('An error occurred while fetching places. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const fetchImages = async (places) => {
        const unsplashAccessKey = 'bz-KfR5Z1ECtE2pUa-vCXQAyjbxBl3oaCg6jwY5Oj7Y'; // Replace with your Unsplash access key
        const imagePromises = places.map(async (place) => {
            try {
                const response = await axios.get('https://api.unsplash.com/search/photos', {
                    params: {
                        query: place.name,
                        client_id: unsplashAccessKey,
                        per_page: 1,
                    },
                });

                // Log the response to inspect the API data
                console.log('Image response for', place.name, ':', response.data);

                // Return the first image or a placeholder if no image is found
                return response.data.results[0]?.urls?.regular || 'data:image/jpeg;base64,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'; 
            } catch (error) {
                console.error('Error fetching image for', place.name, ':', error);
                return 'https://via.placeholder.com/150'; // Default placeholder image
            }
        });

        const imageResults = await Promise.all(imagePromises);
        setImages(imageResults);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        await fetchPlaces();
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search for Nearby Tourism Places</h1>
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border rounded p-2"
                    required
                />
                <button
                    type="submit"
                    className={`bg-blue-500 text-white p-2 rounded ml-2 ${loading ? 'opacity-50' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {places.map((place, index) => (
                    <div
                        key={place.place_id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                    >
                        <div
                            className="h-48 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${images[index]})`,
                            }}
                        ></div>
                        <div className="p-4">
                            <h2 className="font-bold text-xl">{place.name}</h2>
                            <p>{place.formatted_address}</p>
                            <p>
                                Opening Hours:{' '}
                                {place.opening_hours
                                    ? place.opening_hours.open_now
                                        ? 'Open Now'
                                        : 'Closed'
                                    : 'Hours not available'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NearbyTourism;
