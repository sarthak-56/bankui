import React, { useState } from 'react';
import axios from 'axios';

const TransactionHistory = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState('');

    const handleFetchTransactions = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setTransactions([]); // Clear previous transactions

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/transaction-history/${accountNumber}/`);
            setTransactions(response.data.transaction_history);
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred. Please try again.');
        }
    };

    return (
        <div style={pageStyle}>
            <h1 style={headerStyle}>Transaction History</h1>
            <form onSubmit={handleFetchTransactions} style={formStyle}>
                <input
                    type="text"
                    placeholder="Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    style={inputStyle}
                    required
                />
                <button type="submit" style={buttonStyle}>Fetch Transactions</button>
            </form>
            {error && <p style={errorMessageStyle}>{error}</p>}
            {transactions.length > 0 && (
                <div style={transactionListStyle}>
                    <h2 style={listHeaderStyle}>Transaction List</h2>
                    <ul style={listStyle}>
                        {transactions.map((transaction, index) => (
                            <li key={index} style={listItemStyle}>
                                <p><strong>Type:</strong> {transaction.transaction_type}</p>
                                <p><strong>Amount:</strong> ₹{transaction.amount}</p>
                                <p><strong>Date:</strong> {new Date(transaction.date).toLocaleString()}</p>
                                <p><strong>Account Number:</strong> {transaction.account_number}</p>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// Inline CSS styling
const pageStyle = {
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
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

const errorMessageStyle = {
    color: 'red',
    marginTop: '15px',
    textAlign: 'center',
};

const transactionListStyle = {
    marginTop: '20px',
};

const listHeaderStyle = {
    fontSize: '20px',
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: '10px',
};

const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
};

const listItemStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
};

export default TransactionHistory;
