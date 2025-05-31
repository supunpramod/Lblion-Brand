import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Link, useLocation } from 'react-router-dom';

const CustomPackageRequest = () => {
  const [transactionId, setTransactionId] = useState('');
  const [paymentSlip, setPaymentSlip] = useState(null);
  
  // Retrieve the passed data from the Link state
  const location = useLocation();
  const { amount = 30, gasFee = 0.9, total = 30.9 } = location.state || {};

  const walletAddress = 'TMSGbuwCjSkjbd9sXFf1Z3nKHjxeXb6CwL';

  const handleFileChange = (e) => {
    setPaymentSlip(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Request submitted!');
  };

  return (
    <div
      style={{
        background: 'linear-gradient(145deg, #0f1d40, #09142e)',
        color: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '2rem auto',
        boxShadow: '0 0 20px rgba(0,0,0,0.4)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '1.8rem',
          marginBottom: '1rem',
          textAlign: 'center',
          color: '#9fe870',
        }}
      >
        Request Custom Package
      </h2>

      <div>
        <p>
          <strong>Total Amount:</strong>{' '}
          <span style={{ color: '#ffb3c6', fontWeight: 'bold' }}>USDT {total.toFixed(2)}</span>
        </p>
        <p>
          <strong>Price:</strong>{' '}
          <span style={{ color: '#ffb3c6', fontWeight: 'bold' }}>USDT {amount.toFixed(2)}</span>
        </p>
        <p>
          <strong>Gas Fee:</strong>{' '}
          <span style={{ color: '#ffb3c6', fontWeight: 'bold' }}>USDT {gasFee.toFixed(2)}</span>
        </p>
        <p>
          <strong>Package:</strong> Custom
        </p>
        <p>
          <strong>During:</strong> 30 Month Of Period
        </p>
        <p>
          <strong>Leverage:</strong> 0.3% - 0.7% Daily
        </p>
      </div>

      <hr style={{ margin: '1.5rem 0', borderColor: '#334' }} />

      <p style={{ marginBottom: '1rem', lineHeight: '1.5' }}>
        Please{' '}
        <span style={{ color: '#ffb3c6', fontWeight: 'bold' }}>
          deposit the above total amount
        </span>{' '}
        to the given Binance wallet address and request the package with{' '}
        <span style={{ color: '#ffb3c6', fontWeight: 'bold' }}>
          a payment slip (Proof)
        </span>
        .
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <p
          style={{
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            fontSize: '1.1rem',
          }}
        >
          Binance Wallet
        </p>
        <QRCodeCanvas value={walletAddress} size={128} />
        <div
          style={{
            marginTop: '1rem',
            background: '#1a2d4f',
            padding: '0.75rem',
            borderRadius: '6px',
            wordBreak: 'break-all',
            fontFamily: 'monospace',
          }}
        >
          {walletAddress}
        </div>
        <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>
          Total Amount: {total.toFixed(2)} USDT<br />
          <small>Without network fee</small>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
            Transaction ID *
          </label>
          <input
            type="text"
            required
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="Enter the transaction id mentioned in payment slip"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: 'none',
              borderRadius: '6px',
              background: '#102040',
              color: '#fff',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
            Payment Slip *
          </label>
          <input
            type="file"
            required
            onChange={handleFileChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: 'none',
              borderRadius: '6px',
              background: '#102040',
              color: '#fff',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
          <Link to="/Deposit">
            <button
              type="button"
              style={{
                padding: '0.6rem 1.2rem',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                background: '#334',
                color: '#fff',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.background = '#445')}
              onMouseOut={(e) => (e.target.style.background = '#334')}
            >
              GO BACK
            </button>
          </Link>
          <button
            type="submit"
            style={{
              padding: '0.6rem 1.2rem',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              background: '#8bc34a',
              color: '#fff',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.background = '#7cb342')}
            onMouseOut={(e) => (e.target.style.background = '#8bc34a')}
          >
            REQUEST
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomPackageRequest;
