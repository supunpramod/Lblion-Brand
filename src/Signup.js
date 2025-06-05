import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import logo from './bl_logo.png';
import backgroundVideo2 from './background_video2.mp4';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  referralUsername: '',
  username: '',
  password: '',
  confirmPassword: '',
  agree: false,
};

export default function RegisterPage() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [otp, setOtp] = useState('');
  const [userOtp, setUserOtp] = useState('');
  const [step, setStep] = useState('form'); // 'form' | 'otp'
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Helper: Generate OTP
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  // Helper: Validate form fields
  const validateForm = () => {
    const { firstName, lastName, email, username, password, confirmPassword, agree } = formData;
    if (!firstName || !lastName || !email || !username || !password || !confirmPassword || !agree)
      return 'Please fill all required fields and agree to terms.';
    if (password.length < 8)
      return 'Password must be at least 8 characters.';
    if (password !== confirmPassword)
      return 'Passwords do not match.';
    // Add more password rules here if needed
    return null;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  // Send OTP email
  const sendOtpEmail = async (email, otpCode) => {
    try {
      await emailjs.send(
        'service_pz7y5j3',
        'template_g1d6xqj',
        { email, user_otp: otpCode },
        'DyyRIVDaiq2DvZbpm'
      );
      return true;
    } catch (error) {
      alert('Failed to send OTP: ' + error.message);
      return false;
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) return alert(error);

    setLoading(true);
    const generatedOtp = generateOtp();
    const sent = await sendOtpEmail(formData.email, generatedOtp);
    setLoading(false);

    if (sent) {
      setOtp(generatedOtp);
      setStep('otp');
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async () => {
    if (userOtp !== otp) return alert('Invalid OTP. Please try again.');

    setLoading(true);
    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        referralUsername: formData.referralUsername,
        username: formData.username,
        password: formData.password,
      };
      const response = await fetch('http://localhost:8080/api/signup/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setLoading(false);

      if (response.ok) {
        alert('User registered successfully!');
        setFormData(INITIAL_FORM);
        setStep('form');
        navigate('/Login');
      } else {
        const result = await response.json();
        alert('Registration failed: ' + (result?.message || result));
      }
    } catch (error) {
      setLoading(false);
      alert('You are already signed up. Please login.');
    }
  };

  return (
    <div className="register-container">
      <video
        autoPlay loop muted playsInline
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          objectFit: 'cover', background: '#000', opacity: '100%',
        }}
      >
        <source src={backgroundVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {step === 'form' ? (
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="logo-section">
            <img src={logo} alt="lblion brand" className="logo" />
            <h1 className="brand-title">Lblion Brand</h1>
            <p className="brand-tagline">EASY WAY TO BIG GOALS</p>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Referral Username</label>
              <select name="referralUsername" value={formData.referralUsername} onChange={handleChange}>
                <option value="">Select a User</option>
                <option value="admin">admin</option>
              </select>
            </div>
            <div className="form-group">
              <label>Username *</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Password *</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Confirm Password *</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>
          <p className="password-info">
            Password must be at least 8 characters and include uppercase, lowercase, numbers, and symbols.
          </p>
<div className="form-check">
  <label className="form-check-label">
    <input
      type="checkbox"
      name="agree"
      checked={formData.agree}
      onChange={handleChange}
      required
      className="form-check-input"
    />
    I agree to the&nbsp;
    <a href="/terms-of-service" className="link">Terms of Service</a>
    &nbsp;and&nbsp;
    <a href="/privacy-policy" className="link">Privacy Policy</a>
  </label>
</div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Sending OTP...' : 'Register'}
          </button>
          <br />
          <p>Already registered? <Link to="/Login">Login</Link></p>
          <p><Link to="/Dashboard">Dashboard</Link></p>
        </form>
      ) : (
        <div className="otp">
          <h2 style={{ marginBottom: "20px" }}>Enter OTP sent to your email</h2>
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            value={userOtp}
            onChange={e => setUserOtp(e.target.value)}
            style={{ marginBottom: "50px" }}
          />
          <button onClick={handleVerifyOtp} className="submit-button" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </div>
      )}
    </div>
  );
}
