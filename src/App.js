import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';
import Main from './components/Main'; 
import Deposit from './components/Diposit';
import Withdraw from './components/Withdraw';
import Inquiry from './components/Inquiry';
import TransactionHistory from './components/TransactionHistory';

function App() {
  const [user, setUser] = useState(null); // State to hold logged-in user data
  const [showCreateUser, setShowCreateUser] = useState(true);

  const toggleForm = () => {
    setShowCreateUser((prev) => !prev);
  };

  return (
    <Router>
      <div className="App">
        
        <Routes>
          {/* Login Page */}
          <Route path="/" element={
            <div className="form-container">
            
              <button 
                className={`toggle-button ${showCreateUser ? "to-login" : "to-create"}`} 
                onClick={toggleForm}
              >
                {showCreateUser ? "Applicant Login" : "Create account"}
              </button>
              <h6>After registration collect your account number and IFSC Code, For login</h6>
              <div className={`form-slide ${showCreateUser ? "show-create" : "show-login"}`}>
                <div className="form-wrapper create-user">
                  <CreateUser />
                </div>
                <div className="form-wrapper user-login">
                  <UserLogin setUser={setUser} />
                </div>
              </div>
            </div>
          } />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={user ? <UserDashboard user={user} /> : <Navigate to="/" />} />
          
          {/* Main Page */}
          <Route path="/main" element={<Main />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/transactionhistory" element={<TransactionHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
