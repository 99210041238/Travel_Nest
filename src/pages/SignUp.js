// src/pages/SignUpPage.js
import React from 'react';
import SignUp from '../components/SignUp';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        // Handle successful sign-up logic
        navigate('/sign-in'); // Redirect to sign-in page after sign-up
    };

    return (
        <div className="sign-up-page">
            <h2>Create Account</h2>
            <SignUp onSignUp={handleSignUp} />
        </div>
    );
};

export default SignUpPage;
