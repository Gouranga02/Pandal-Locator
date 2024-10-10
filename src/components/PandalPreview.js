// src/components/PandalPreview.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PandalPreview = () => {
  const { id } = useParams(); // Get the pandal ID from the URL
  const [pandal, setPandal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPandal = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/pandals/${id}`);
        setPandal(response.data);
      } catch (error) {
        console.error('Error fetching pandal details:', error);
        setError('Pandal not found');
      } finally {
        setLoading(false);
      }
    };

    fetchPandal();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  if (error) {
    return <p>{error}</p>; // Error state
  }

  return (
    <div style={previewStyle}>
      <h1 style={titleStyle}>{pandal.name}</h1>
      <h3 style={placeStyle}>{pandal.place}</h3>
      <div style={imageWrapperStyle}>
        <img
          src={pandal.pictures}
          alt={pandal.name}
          style={imageStyle}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'path/to/placeholder/image.png'; // Placeholder image
          }}
        />
      </div>
      <p style={descriptionStyle}>{pandal.description}</p>
      <div style={linkSectionStyle}>
        <a href={pandal.location} target="_blank" rel="noopener noreferrer" style={linkStyle}>View Location</a>
        <a href={pandal.videos} target="_blank" rel="noopener noreferrer" style={linkStyle}>Watch Videos</a>
      </div>
    </div>
  );
};

// Styles
const previewStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f0f4f8',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#333',
};

const placeStyle = {
  fontSize: '1.2rem',
  color: '#666',
};

const imageWrapperStyle = {
  width: '100%',
  maxWidth: '600px',
  height: '400px',
  overflow: 'hidden',
  borderRadius: '10px',
  margin: '20px 0',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const descriptionStyle = {
  fontSize: '1rem',
  color: '#555',
  textAlign: 'center',
  padding: '0 20px',
};

const linkSectionStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007BFF',
  fontWeight: 'bold',
  transition: 'color 0.3s',
};

export default PandalPreview;
