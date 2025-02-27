import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx'; // Ensure the correct path to your AuthContext
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BookingPage from './pages/BookingPage';
import EditUserDetailsPage from './pages/EditUserDetailsPage';
import Login from './pages/Login.tsx'; 
import Profile from './pages/Profile.tsx';
import Registration from './pages/Registration.tsx'; // Corrected import name
import TransportServicePage from './pages/TransportServicePage';
import Map from './components/Map';
import FoodOrder from './pages/FoodOrder.tsx';
import PaymentPage from './components/PaymentPage';
import SearchBox from './components/SearchBox.js';
import UPIPaymentPage from './components/UPIPaymentPage';
import TrainBooking from './components/CreateTrainBooking';
import BusBooking from './components/CreateBusBooking';
import FlightBooking from './components/CreateFlightBooking';
import NearbyTourism from './components/NearbyTourism';
import RoomBookingPage from './components/RoomBookingPage'; // Corrected import name
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/map" element={<Map />} /> {/* Adjusted to have a unique path */}
                <Route path="/search" element={<SearchPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/roombooking" element={<RoomBookingPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/upi-payment" element={<UPIPaymentPage />} />
                <Route path="/train" element={<TrainBooking />} />
                <Route path="/bus" element={<BusBooking />} />
                <Route path="/food" element={<FoodOrder />} /> {/* Added route for FoodOrder */}
                <Route path="/flight" element={<FlightBooking />} />
                <Route path="/nearby-tourism" element={<NearbyTourism />} /> {/* Corrected here */}
                <Route path="/edit-user-details" element={<EditUserDetailsPage />} />
                <Route path="/transport-service" element={<TransportServicePage />} />
            </Routes>
            <Footer />
        </AuthProvider>
    );
}

export default App;
