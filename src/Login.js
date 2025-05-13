import React, { useState } from 'react';
import './login.css';
import logo from './bl_logo.png';
import { Link } from 'react-router-dom';
import backgroundVideo from './background_video.mp4'; // ඔයාගේ video file එක import කරන්න
import backgroundVideo2 from './background_video2.mp4'; // ඔයාගේ video file එක import කරන්න

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
  <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    
    background: '#000',
    opacity: '100%',
  }}
>
  <source src={backgroundVideo2} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <div className="login-box">
        {/* Login Box එක ඇතුළේ Background Video එක */}
        <video
          autoPlay
          loop
          muted
          className="login-box-video"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="login-title">Welcome</h2>
        <p className="login-subtitle">Sign in to your account</p>

        <img
          src={logo}
          alt="lblionbrand"
          className="logo"
          style={{ borderRadius: "50%" }}
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
