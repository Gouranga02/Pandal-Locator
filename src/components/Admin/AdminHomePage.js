import React from 'react';
import { useNavigate } from 'react-router-dom';
import addIcon from '../../Icons/add.gif'; // Update this path if necessary
import removeIcon from '../../Icons/remove.gif'; // Update this path if necessary
import updateIcon from '../../Icons/update.gif'; // Update this path if necessary

const AdminHomePage = () => {
  const navigate = useNavigate();

  // Handlers for button clicks
  const handleAddPandal = () => {
    navigate('/admin/addpandal');
  };

  const handleRemovePandal = () => {
    navigate('/admin/removepandal'); // Ensure this route exists
  };

  const handleUpdatePandal = () => {
    navigate('/admin/updatepandal'); // Ensure this route exists
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to the Admin Panel</h1>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={handleAddPandal}>
          <img src={addIcon} alt="Add Pandal" style={iconStyle} />
          Add Pandal
        </button>
        <button style={buttonStyle} onClick={handleRemovePandal}>
          <img src={removeIcon} alt="Remove Pandal" style={iconStyle} />
          Remove Pandal
        </button>
        <button style={buttonStyle} onClick={handleUpdatePandal}>
          <img src={updateIcon} alt="Update Pandal" style={iconStyle} />
          Update Pandal Details
        </button>
      </div>
    </div>
  );
};

// Styles for Admin Home Page
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '40px',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const buttonStyle = {
  padding: '15px 30px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#000',
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.3s',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center', // Align icons and text
};

const iconStyle = {
  width: '24px', // Adjust as needed
  height: '24px',
  marginRight: '10px', // Space between icon and text
};

export default AdminHomePage;
