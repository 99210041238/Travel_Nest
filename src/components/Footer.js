import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-darkBlue text-white py-8 footer">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* About Us Section */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <p className="text-sm">
                            TravelNest is your one-stop solution for easy and affordable travel accommodations. We provide the best hotel bookings, transportation options, and food services to make your travel experience memorable.
                        </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="w-full sm:w-1/3 flex flex-wrap justify-center gap-4 mb-4 sm:mb-0">
                        <Link to="/terms-of-service">
                            <button className="footer-button">Terms of Service</button><br></br><br></br>
                        </Link>
                        <Link to="/privacy-policy">
                            <button className="footer-button">Privacy Policy</button><br></br><br></br>
                        </Link>
                        <Link to="/about-us">
                        <button className="footer-button">About Us</button><br></br><br></br>
                        </Link>
                        <Link to="/contact-us">
                            <button className="footer-button">Contact Us</button><br></br>
                        </Link>
                    </div>

                    {/* Contact Us Section */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <ul className="text-sm">
                            <li className="mb-1">
                                <a href="mailto:support@travelnest.com" className="hover:underline text-lightGreen">Email: support@travelnest.com</a>
                            </li>
                            <li className="mb-1">
                                <a href="tel:+12345678901" className="hover:underline text-lightGreen">Phone: +1 (234) 567-8901</a>
                            </li>
                            <li className="mb-1">Address: 123 Travel St, City, Country</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} TravelNest. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
