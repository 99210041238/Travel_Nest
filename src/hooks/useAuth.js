// src/hooks/useAuth.js

import { useState, useEffect, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Create a context to hold authentication state
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Provider component to wrap around the application
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Check if user is logged in when the app loads
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get('/api/auth/status');
                if (response.data.loggedIn) {
                    setUser(response.data.user);
                }
            } catch (error) {
                console.error('Error checking authentication status:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    // Function to log in the user
    const login = async (credentials) => {
        try {
            const response = await axios.post('/api/auth/login', credentials);
            setUser(response.data.user);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    };

    // Function to log out the user
    const logout = async () => {
        try {
            await axios.post('/api/auth/logout');
            setUser(null);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    // Provide authentication status and methods
    const value = {
        user,
        login,
        logout,
        loading,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
