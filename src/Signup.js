import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate} from 'react-router-dom';
import emailjs from 'emailjs-com';
import logo from './bl_logo.png';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    referralUsername: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [userOtp, setUserOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); 
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const sendOtpEmail = async (email, otpCode) => {
    const templateParams = {
      email: email,           
      user_otp: otpCode,      
    };

    try {
      await emailjs.send(
        'service_pz7y5j3',
        'template_g1d6xqj',
        templateParams,
        'DyyRIVDaiq2DvZbpm' 
      );
      alert('OTP sent to your email.');
    } catch (error) {
      alert('Failed to send OTP: ' + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.username ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.agree
    ) {
      alert('Please fill all required fields and agree to terms.');
      return;
    }

    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const generatedOtp = generateOtp();
    setOtp(generatedOtp);
    await sendOtpEmail(formData.email, generatedOtp);
    setOtpSent(true);
    setIsVerifying(true);
  };

  const handleVerifyOtp = async () => {
    if (userOtp === otp) {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        referralUsername: formData.referralUsername,
        username: formData.username,
        password: formData.password,
      };

      try {
        const response = await fetch('http://localhost:8080/api/signup/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert('User registered successfully!');
          setOtpSent(false);
          setIsVerifying(false);
          navigate('/Login');
        } else {
          const result = await response.json();
          alert('Registration failed: ' + result);
        }
      } catch (error) {
        alert("You are allredy signup..... pleace loggin");
      }
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const navigate = useNavigate();


  return (
    <div className="register-container">
      {!isVerifying ? (
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
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label>
              I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="submit-button">Register</button>
          <br />
          <p>Already registered? <Link to="/Login">Login</Link></p>
          <p><Link to="/Profile">dashboad</Link></p>
        </form>
      ) : (
        <div className="otp">
          <h2 style={{marginBottom:"20px"}}>Enter OTP sent to your email</h2>
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            value={userOtp}
            onChange={(e) => setUserOtp(e.target.value)}
            style={{marginBottom:"50px"}}
          />
          <button onClick={handleVerifyOtp} className="submit-button">Verify OTP</button>
        </div>
      )}
    </div>
  );
}
