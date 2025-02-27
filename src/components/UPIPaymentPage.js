import React from 'react';

const UPIPaymentPage = () => {
    return (
        <div className="upi-payment-page">
            <h2>Scan to Pay</h2>
            <img 
                src={process.env.PUBLIC_URL + '/assets/qr_code.jpg'} 
                alt="QR Code" 
                className="qr-code" 
            />
            <p>Scan the QR code above with your UPI app to complete the payment.</p>
            <a 
                href={process.env.PUBLIC_URL + '/assets/qr_code.jpg'} 
                download="UPI-QR-Code.jpg"
            >
                Download QR Code
            </a>
        </div>
    );
};

export default UPIPaymentPage;
