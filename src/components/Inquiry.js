import React, { useState } from 'react';
import axios from 'axios';

const Inquiry = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState('');

    const handleInquiry = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error messages

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/inquiry/${accountNumber}/`);
            setBalance(response.data.balance);
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred. Please try again.');
            setBalance(null); // Clear the balance if there's an error
        }
    };

    return (
        <div>
            <div style={pageStyle}>
                <h1 style={headerStyle}>Account Inquiry</h1>
                <form onSubmit={handleInquiry} style={formStyle}>
                    <input
                        type="text"
                        placeholder="Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        style={inputStyle}
                        required
                    />
                    {/* Display the balance here */}
                    {balance !== null && <p style={balanceStyle}>Current Balance: ₹{balance}/-</p>}
                    {error && <p style={errorMessageStyle}>{error}</p>}
                    <button type="submit" style={buttonStyle}>Check Balance</button>
                </form>
            </div>

            <div style={instructionsStyle}>
                <h1 style={headingStyle}>Safety Instructions</h1>
                <ul style={listStyle}>
                    <li><strong>Never Share Your Account Number:</strong> Keep it confidential.</li>
                    <li><strong>Keep Your ATM PIN Confidential:</strong> Always protect your PIN.</li>
                    <li><strong>Always Log Out After Use:</strong> Log out after banking.</li>
                    <li><strong>Regularly Check Account Activity:</strong> Monitor for suspicious activity.</li>
                    <li><strong>Beware of Phishing Emails:</strong> Stay cautious of phishing attempts.</li>
                    <li><strong>Use Strong, Unique Passwords:</strong> Avoid using common passwords.</li>
                    <li><strong>Enable Two-Factor Authentication:</strong> Add an extra security layer.</li>
                    <li><strong>Avoid Public Wi-Fi Access:</strong> Don’t use public Wi-Fi.</li>
                    <li><strong>Keep Devices Secure:</strong> Use antivirus and update regularly.</li>
                </ul>
            </div>

        </div>
    );
};

// Inline CSS styling
const pageStyle = {
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '500px',
    margin: '50px auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
    fontSize: '24px',
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#000000',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const balanceStyle = {
    color: 'green',
    marginTop: '15px',
    textAlign: 'center',
};

const errorMessageStyle = {
    color: 'red',
    marginTop: '15px',
    textAlign: 'center',
};

const instructionsStyle = {
    flex: 2,
    padding: '20px',
    margin: '20px auto',
    textAlign: 'center',
    maxWidth: '600px',
    border: '1px solid #ccc',
};

const headingStyle = {
    color: '#000000',
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign: 'center',
};

const listStyle = {
    listStyleType: 'disc',
    padding: '0 20px',
    textAlign: 'left',
    margin: '0 auto',
};

export default Inquiry;
