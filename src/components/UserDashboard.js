import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDashboard = () => {
    const { state } = useLocation();
    const user = state?.user;

    return (
        <div style={pageContainerStyle}>
            {user ? (
                <div style={cardStyle}>
                    <h2 style={headingStyle}>Applicant Details</h2>
                    <div style={infoContainerStyle}>
                        <div style={infoItemStyle}>
                            <strong>Name:</strong>
                            <span>{user.name}</span>
                        </div>
                        <div style={infoItemStyle}>
                            <strong>Account Number:</strong>
                            <span>{user.account_number}</span>
                        </div>
                        <div style={infoItemStyle}>
                            <strong>IFSC Code:</strong>
                            <span>{user.ifsc_code}</span>
                        </div>
                        <div style={infoItemStyle}>
                            <strong>Location:</strong>
                            <span>{user.location}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <p style={noDataStyle}>No user data available.</p>
            )}
        </div>
    );
};

// Styles for the dashboard
const pageContainerStyle = {
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
};

const cardStyle = {
    backgroundColor: 'transparent',
    width: '100%',
    padding: '20px',
    textAlign: 'center',
};

const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
};

const infoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
};

const infoItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
    fontSize: '16px',
    color: '#555',
};

const noDataStyle = {
    fontSize: '18px',
    color: '#999',
    textAlign: 'center',
};

// Media Queries for responsiveness
const mediaQueries = `
    @media (max-width: 768px) {
        div[style*="maxWidth: '500px'"] {
            max-width: 90%;
        }

        div[style*="fontSize: '16px'"] {
            font-size: 14px;
        }
    }
`;

// Injecting media queries dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueries;
document.head.appendChild(styleSheet);

export default UserDashboard;
