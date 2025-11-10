import React from 'react';
import './login.css';
import logo from './logo192.png'

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
       <img src={logo} alt="Banner" width={400} />
        <input type="text" placeholder="Enter username" className="input-field" />
        <input type="password" placeholder="Enter password" className="input-field" />
        <button className="login-button">Login</button>
        <div className="forgot-password">Forgot password?</div>
      </div>
    </div>
  );
}

export default LoginPage;
