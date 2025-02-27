import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { room, totalCost } = state || {};

    const handlePaymentOption = (option) => {
        if (option === 'Credit/Debit Cards' || option === 'Net Banking') {
            alert(`Payment through ${option} is currently under maintenance. Please use UPI or Pay on Live.`);
        }
    };

    return (
        <div className="payment-page-container">
            <h2>Choose Payment Method</h2>
            <div className="payment-options">
                <div className="payment-option" onClick={() => handlePaymentOption('Credit/Debit Cards')}>
                    Credit/Debit Cards
                    <p>Pay using your Visa, MasterCard, or other cards.</p>
                </div>
                <div className="payment-option" onClick={() => handlePaymentOption('Net Banking')}>
                    Net Banking
                    <p>Securely pay through your bank account.</p>
                </div>
                <div className="payment-option" onClick={() => navigate('/upi-payment')}>
                    UPI Payment
                    <p>Pay easily using UPI apps like Google Pay, PhonePe, or Paytm.</p>
                </div>
                <div className="payment-option">
                    Pay on Live
                    <p>Opt to pay when you arrive at the hotel.</p>
                </div>
            </div>

            {room && (
                <div className="payment-summary">
                    <h3>Payment Summary</h3>
                    <p>Room: {room.name}</p>
                    <p>Total Cost: ${totalCost}</p>
                    <img 
                        src={process.env.PUBLIC_URL + '/assets/qr_code.jpg'} 
                        alt="QR Code" 
                        className="qr-code" 
                    /> {/* Display the QR code */}
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
