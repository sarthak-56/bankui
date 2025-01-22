import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = ({ setUser }) => {
    const [loginData, setLoginData] = useState({
        account_number: '',
        ifsc_code: ''
    });
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginMessage('');
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/login/', loginData);
            console.log('Login response:', response.data);
            
            const userProfile = response.data.user.user_profile;  
            const accountNumber = response.data.account_number;  
    
            if (!accountNumber) {
                throw new Error('Account number is missing from the response.');
            }
    
            const accountResponse = await axios.get(`http://127.0.0.1:8000/api/user/account-details/${accountNumber}/`);
            const accountDetails = accountResponse.data.account; 
    
            const user = {
                name: userProfile.name,
                location: userProfile.location,
                account_number: accountNumber,  
                ifsc_code: accountDetails.ifsc_code, 
            };
    
            setUser(user); 
            navigate('/main', { state: { user } }); 
        } catch (error) {
            console.error('Login error:', error);
            setLoginMessage(error.response?.data?.error || 'An error occurred during login.');
        }
    };
    
    
    
    const pageStyle = {
        backgroundColor: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '400px',
        margin: '50px auto',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const inputStyle = {
        width: '96%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
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

    const messageStyle = {
        marginTop: '20px',
        color: 'red',
    };

    return (
        <div style={pageStyle}>
            <h2>Bank User Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="account_number"
                    placeholder="Account Number"
                    value={loginData.account_number}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                <input
                    type="text"
                    name="ifsc_code"
                    placeholder="IFSC Code"
                    value={loginData.ifsc_code}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
            {loginMessage && <p style={messageStyle}>{loginMessage}</p>}
        </div>
    );
};

export default UserLogin;
