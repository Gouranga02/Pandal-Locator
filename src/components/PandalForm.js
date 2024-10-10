import React, { useState } from 'react';
import axios from 'axios';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjaas6ATsa9HUkWwZ-g1iDy8osx5S09NY",
  authDomain: "pandal-locator.firebaseapp.com",
  projectId: "pandal-locator",
  storageBucket: "pandal-locator.appspot.com",
  messagingSenderId: "796543256801",
  appId: "1:796543256801:web:a58fdf98cd717430978fa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const PandalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    pictures: '',
    videos: '',
    view_3d: '',
    description: '',
    place: ''
  });
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [uploading, setUploading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    setUploading(true);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFormData((prevData) => ({ ...prevData, pictures: url })); // Update pictures field
      setSuccessMessage('Image uploaded successfully!');
      console.log('Image URL:', url); // Log the URL for debugging
    } catch (error) {
      console.error('Upload failed:', error);
      setSuccessMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/pandals', formData);
      setSuccessMessage('Pandal added successfully!');
      setFormData({
        name: '',
        location: '',
        pictures: '',
        videos: '',
        view_3d: '',
        description: '',
        place: ''
      });
      setFile(null);
    } catch (error) {
      console.error('Error adding pandal:', error);
    }
  };

  return (
    <div style={formStyle}>
      <h2>Add a New Pandal</h2>
      {successMessage && <div style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="button" onClick={handleUpload} disabled={uploading} style={uploadButtonStyle}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        {formData.pictures && <div style={urlStyle}>Image URL: {formData.pictures}</div>} {/* Show the URL */}

        {/* Place dropdown */}
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Place:</label>
          <select
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select Location</option>
            <option value="kolkata">Kolkata</option>
            <option value="kharagpur">Kharagpur</option>
            <option value="medinipur">Medinipur</option>
            <option value="jhargram">Jhargram</option>
            <option value="keshiary">Keshiary</option>
          </select>
        </div>

        {Object.keys(formData).filter(key => key !== 'place').map((key) => (
          <div key={key} style={inputContainerStyle}>
            <label style={labelStyle}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        ))}
        <button type="submit" style={submitButtonStyle}>Submit</button>
      </form>
    </div>
  );
};

// Styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const uploadButtonStyle = {
  margin: '10px 0',
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const urlStyle = {
  margin: '10px 0',
  fontStyle: 'italic',
  color: '#555',
};

const inputContainerStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
};

const submitButtonStyle = {
  padding: '10px',
  backgroundColor: '#008CBA',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default PandalForm;
