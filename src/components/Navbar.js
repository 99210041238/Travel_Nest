import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav className="custom-navbar bg-blue-500 p-4">
            <div className="container mx-auto flex items-center">
                {/* Logo */}
                <div className="navbar-logo text-2xl font-bold hover:text-blue-300 transition duration-300">
                    <Link to="/"><h2>TravelNest</h2></Link>
                </div>

                {/* Navigation Links (hidden on small screens) */}
                <div className="nav-links hidden md:flex space-x-6 ml-6">
                    <Link to="/train" onClick={handleLinkClick} className="nav-link hover:underline hover:text-blue-300 transition duration-300">Train</Link>
                    <Link to="/bus" onClick={handleLinkClick} className="nav-link hover:underline hover:text-blue-300 transition duration-300">Bus</Link>
                    <Link to="/flight" onClick={handleLinkClick} className="nav-link hover:underline hover:text-blue-300 transition duration-300">Flight</Link>
                    <Link to="/food" onClick={handleLinkClick} className="nav-link hover:underline hover:text-blue-300 transition duration-300">Food</Link>
                    <Link to="/nearby-tourism" onClick={handleLinkClick} className="nav-link hover:underline hover:text-blue-300 transition duration-300">Nearby Tourism</Link>
                </div>

                {/* Login and Menu Buttons in the right corner */}
                <div className="flex space-x-4 ml-auto">
                    <Link
                        to="/login"
                        className="bg-white text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300 hidden md:block"
                    >
                        Login
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="bg-white text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Menu
                    </button>
                </div>
            </div>

            {/* Dropdown Menu for Small Screens */}
            {isMenuOpen && (
                <div className="navbar-dropdown absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md">
                    <Link to="/user-profile" onClick={handleLinkClick} className="dropdown-link block px-4 py-2 hover:bg-gray-200">User Profile</Link><br></br>
                    <Link to="/edit-details" onClick={handleLinkClick} className="dropdown-link block px-4 py-2 hover:bg-gray-200">Edit Details</Link><br></br>
                    <Link to="/change-password" onClick={handleLinkClick} className="dropdown-link block px-4 py-2 hover:bg-gray-200">Change Password</Link><br></br>
                    <Link to="/signout" onClick={handleLinkClick} className="dropdown-link block px-4 py-2 hover:bg-gray-200">Sign Out</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
