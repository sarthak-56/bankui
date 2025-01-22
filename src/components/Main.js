import React, { useState } from 'react';
import UserDashboard from './UserDashboard';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  const handleDepositClick = () => {
    navigate('/Deposit');
  };

  const handleWithdrawClick = () => {
    navigate('/Withdraw');
  };

  const handleCheckBalanceClick = () => {
    navigate('/Inquiry');
  };

  const handleViewHistoryClick = () => {
    navigate('/TransactionHistory');
  };

  return (
    <div style={mainStyle}>
      <UserDashboard />
      <div style={contentStyle}>
        <div style={instructionsStyle}>
          <h1 style={headingStyle}>Bank Security Instructions</h1>
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

        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={handleDepositClick}>Deposit</button>
          <button style={buttonStyle} onClick={handleWithdrawClick}>Withdraw</button>
          <button style={buttonStyle} onClick={handleCheckBalanceClick}>Check Balance</button>
          <button style={buttonStyle} onClick={handleViewHistoryClick}>View History</button>
        </div>
      </div>
    </div>
  );
}

// Styles
const mainStyle = {
  backgroundColor: '#ffffff',
  color: '#000000',
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'row', // Default to side-by-side layout for large screens
  justifyContent: 'space-between',
  marginTop: '20px',
  flexWrap: 'wrap', // Allow wrapping for smaller screens
};

const instructionsStyle = {
  flex: 2,
  paddingRight: '20px',
  marginBottom: '20px',
};

const headingStyle = {
  color: '#000000',
  textAlign: 'left',
};

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  textAlign: 'left',
};

const buttonContainerStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column', // Default to vertical stacking for buttons
  gap: '10px', // Add consistent spacing between buttons
};

const buttonStyle = {
  padding: '15px 20px',
  backgroundColor: '#000000',
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s',
};

// Injecting media queries for responsiveness
const mediaQueries = `
  @media (max-width: 768px) {
    div[style*="flexDirection: 'row'"] {
      flex-direction: column; /* Stack instructions and buttons vertically */
    }

    div[style*="flexDirection: 'column'"] {
      align-items: center; /* Center buttons for small screens */
    }

    button[style*="width: '100%'"] {
      width: auto; /* Allow buttons to size naturally on smaller screens */
    }
  }
`;

// Add media queries dynamically
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = mediaQueries;
document.head.appendChild(styleSheet);


