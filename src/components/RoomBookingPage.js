import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RoomBooking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const hotelName = new URLSearchParams(location.search).get('hotel'); // Extract hotel from URL

    const [bookingDetails, setBookingDetails] = useState({
        checkIn: '',
        checkOut: '',
        adults: 1,
        children: 0,
        rooms: 1,
        shareRoom: false,
        gender: '',
        childrenAges: [] // Store ages of children if applicable
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "children") {
            const childrenCount = parseInt(value);
            setBookingDetails(prevState => ({
                ...prevState,
                children: childrenCount,
                childrenAges: new Array(childrenCount).fill('') // Reset ages array when count changes
            }));
        } else {
            setBookingDetails(prevState => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleAgeChange = (index, value) => {
        const updatedAges = [...bookingDetails.childrenAges];
        updatedAges[index] = value;
        setBookingDetails(prevState => ({
            ...prevState,
            childrenAges: updatedAges
        }));
    };

    const handleContinue = () => {
        const { checkIn, checkOut, adults, children, rooms, shareRoom, gender, childrenAges } = bookingDetails;
        
        let url = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(hotelName)}&checkin_date=${checkIn}&checkout_date=${checkOut}&adults=${adults}&children=${children}&rooms=${rooms}`;
        
        if (shareRoom) {
            url += `&room_sharing=true&gender=${gender}`;
        }

        if (children > 0) {
            url += `&children_ages=${childrenAges.join(',')}`; // Append children's ages
        }

        window.location.href = url;
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    Book a Room at {hotelName}
                </h2>

                <label className="block text-gray-700">Check-in Date:</label>
                <input type="date" name="checkIn" value={bookingDetails.checkIn} onChange={handleChange} className="w-full p-2 border rounded mb-3" />

                <label className="block text-gray-700">Check-out Date:</label>
                <input type="date" name="checkOut" value={bookingDetails.checkOut} onChange={handleChange} className="w-full p-2 border rounded mb-3" />

                <label className="block text-gray-700">Number of Adults:</label>
                <input type="number" name="adults" value={bookingDetails.adults} min="1" onChange={handleChange} className="w-full p-2 border rounded mb-3" />

                <label className="block text-gray-700">Number of Children:</label>
                <input type="number" name="children" value={bookingDetails.children} min="0" onChange={handleChange} className="w-full p-2 border rounded mb-3" />

                {bookingDetails.children > 0 && (
                    <>
                        <label className="block text-gray-700">Children's Ages:</label>
                        {bookingDetails.childrenAges.map((age, index) => (
                            <input
                                key={index}
                                type="number"
                                min="1"
                                max="17"
                                value={age}
                                onChange={(e) => handleAgeChange(index, e.target.value)}
                                className="w-full p-2 border rounded mb-3"
                                placeholder={`Child ${index + 1} Age`}
                            />
                        ))}
                    </>
                )}

                <label className="block text-gray-700">Number of Rooms:</label>
                <input type="number" name="rooms" value={bookingDetails.rooms} min="1" onChange={handleChange} className="w-full p-2 border rounded mb-3" />

                <label className="flex items-center space-x-2">
                    <input type="checkbox" name="shareRoom" checked={bookingDetails.shareRoom} onChange={handleChange} />
                    <span>Are you willing to share a room?</span>
                </label>

                {bookingDetails.shareRoom && (
                    <>
                        <label className="block text-gray-700">Gender:</label>
                        <select name="gender" value={bookingDetails.gender} onChange={handleChange} className="w-full p-2 border rounded mb-3">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </>
                )}

                <button onClick={handleContinue} className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">
                    Continue to Booking
                </button>
            </div>
        </div>
    );
};

export default RoomBooking;
