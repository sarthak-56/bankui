import React, { useState } from 'react';
import axios from 'axios';

const Withdraw = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/withdraw/', {
                account_number: accountNumber,
                amount: parseFloat(amount),
            });
            console.log(response)
            setMessage(`Withdrawal of ₹${amount}/- successful from your account!`);
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred. Please try again.');
        }
    };

    return (
        <div>
        <div style={pageStyle}>
            <h1 style={headerStyle}>Withdraw Funds</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="text"
                    placeholder="Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    style={inputStyle}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={inputStyle}
                    required
                />
                <button type="submit" style={buttonStyle}>Withdraw</button>
            </form>
            {message && <p style={successMessageStyle}>{message}</p>}
            {error && <p style={errorMessageStyle}>{error}</p>}

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

const successMessageStyle = {
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

export default Withdraw;
