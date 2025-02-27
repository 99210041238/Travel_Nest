// src/pages/SignInPage.js
import React from 'react';
import SignIn from '../components/SignIn';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Handle successful sign-in logic
        navigate('/user-details'); // Redirect to user details after sign-in
    };

    return (
        <div className="sign-in-page">
            <h2>Sign In</h2>
            <SignIn onSignIn={handleSignIn} />
        </div>
    );
};

export default SignInPage;
