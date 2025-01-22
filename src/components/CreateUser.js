import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [userData, setUserData] = useState({
        name: '',
        location: '',
        phone_number: '',
        password: '' 
    });
    const [message, setMessage] = useState('');  

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); 
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/create-user/', { 
                user_profile: userData,
                password: userData.password 
            });
            const { account_number, atm_card_number, ifsc_code } = response.data;
            setMessage(`User created successfully!\nAccount Number: ${account_number}\nIFSC Code: ${ifsc_code}`);
        } catch (error) {
            setMessage(error.response?.data?.error || "An error occurred.");
        }
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
        border: '1px solid #ccc',

    };
    
    const headerStyle = {
        fontSize: '24px',
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    };
    
    const inputStyle = {
        width: '96%',
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

    const messageStyle = {
        marginBottom: '15px',
        padding: '20px',
        backgroundColor: '#f0f8ff',
        border: '1px solid #add8e6',
        borderRadius: '5px',
        color: '#000',
        textAlign: 'center',
    };
    
    const footerText = {
        fontSize: '12px',
        color: '#999999',
        textAlign: 'center',
        marginTop: '20px',
    };
    
    return (
        <div style={pageStyle}>
             {message && <div style={messageStyle}>{message}</div>}
            <h1 style={headerStyle}>Bank Official - User Creation</h1>
        
            <form style={formStyle} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    style={inputStyle}
                    value={userData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    style={inputStyle}
                    value={userData.location}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    style={inputStyle}
                    value={userData.phone_number}
                    onChange={handleChange}
                />
                <input
                    type="password"  // Change to password input
                    name="password"
                    placeholder="Password"
                    style={inputStyle}
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" style={buttonStyle}>Create account</button>
            </form>
            <p style={footerText}>Please ensure all details are accurate before submission.</p>
        </div>
    );
};

export default CreateUser;
