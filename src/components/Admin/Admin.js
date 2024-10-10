// src/components/Admin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', { // Update with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminId, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      if (data.success) {
        alert('Login successful!');
        navigate('/admin/home'); // Redirect to the admin home page
      } else {
        alert('Invalid Admin ID or Password');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Admin Login</h1>
      <form onSubmit={handleLogin} style={formStyle}>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Admin ID:</label>
          <input
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

// Styles for the Admin page
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
};

const headerStyle = {
  marginBottom: '20px',
  color: '#333',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '5px',
  color: '#555',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

export default Admin;
