export const fetchTransportOptions = async (type) => {
    try {
        const response = await fetch(`http://localhost:5000/api/transport/${type}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${type} options:`, error);
        throw error;
    }
};

export const bookTransport = async (bookingDetails) => {
    try {
        const response = await fetch(`http://localhost:5000/api/transport/book`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingDetails),
        });
        return await response.json();
    } catch (error) {
        console.error('Error booking transport:', error);
        throw error;
    }
};
