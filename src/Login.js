import React, { useState } from 'react';
import './login.css';
import logo from'./bl_logo.png';

import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password
    };

    try {
      const response = await fetch('http://localhost:8080/api/login/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials: 'include'  
      });

      const result = await response.text(); 

      if (response.ok) {
        setMessage(result);
      
      } else {
        setMessage(result);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error connecting to the server.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome</h2>
        <p className="login-subtitle">Sign in to your account</p>

        <img
          src={logo}
          alt="lblionbrand"
          className="logo"
          style={{borderRadius:"50%"}}
        />
        <h1 className="brand-name">lblionbrand</h1>
        <p className="brand-slogan">EASY WAY TO BIG GOALS</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">SUBMIT</button>
        </form>

        {message && <p className="login-message">{message}</p>}

        <div className="login-footer">
          <p>Forgot Password?</p>
          <p>
            Don’t have an account? <Link to="/Signup">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
