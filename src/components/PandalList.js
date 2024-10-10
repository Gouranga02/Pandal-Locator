import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import locationIcon from '../Icons/way.gif';
import videoIcon from '../Icons/video-player.gif';
import picturesIcon from '../Icons/photo-gallery.gif';
import view3dIcon from '../Icons/modelling.gif';
import destinationIcon from '../Icons/destination.gif';

const PandalList = () => {
  const [pandals, setPandals] = useState([]);

  useEffect(() => {
    const fetchPandals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pandals/getAll');
        setPandals(response.data);
      } catch (error) {
        console.error('Error fetching pandals:', error);
      }
    };

    fetchPandals();
  }, []);

  return (
    <div style={pandalListStyle}>
      <h1 style={headingStyle}>Top Durga Pandals of 2024</h1>

      <div style={gridContainerStyle}>
        {pandals.length > 0 ? (
          pandals.slice(0, 6).map((pandal, index) => {
            const imageUrl = pandal.pictures;

            return (
              <div key={index} style={pandalCardStyle}>
                <h2 style={pandalNameStyle}>{pandal.name}</h2>
                <h3 style={pandalPlaceStyle}>{pandal.place}</h3>

                <div style={pandalImageWrapperStyle}>
                  {imageUrl ? (
                    <Link to={`/pandals/${pandal._id}`} style={{ textDecoration: 'none' }}>
                      <img
                        src={imageUrl}
                        alt={pandal.name}
                        style={pandalImageStyle}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'path/to/placeholder/image.png'; // Placeholder image
                        }}
                      />
                    </Link>
                  ) : (
                    <p>No image available</p>
                  )}
                </div>

                <div style={iconSectionStyle}>
                  <div style={iconItemStyle}>
                    <a href={pandal.location} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      <img src={locationIcon} alt="Location" style={iconStyle} />
                      <span style={iconTextStyle}>Location</span>
                    </a>
                  </div>
                  <div style={iconItemStyle}>
                    <a href={pandal.videos} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      <img src={videoIcon} alt="Videos" style={iconStyle} />
                      <span style={iconTextStyle}>Videos</span>
                    </a>
                  </div>
                  <div style={iconItemStyle}>
                    <a href={pandal.pictures} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      <img src={picturesIcon} alt="Pictures" style={iconStyle} />
                      <span style={iconTextStyle}>Pictures</span>
                    </a>
                  </div>
                  <div style={iconItemStyle}>
                    <a href="#" style={linkStyle}>
                      <img src={view3dIcon} alt="3D View" style={iconStyle} />
                      <span style={iconTextStyle}>3D View</span>
                    </a>
                  </div>
                  <div style={iconItemStyle}>
                    <a href="#" style={linkStyle}>
                      <img src={destinationIcon} alt="Distance" style={iconStyle} />
                      <span style={iconTextStyle}>Distance</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No pandals available</p>
        )}
      </div>

      <Link to="/pandals" style={seeAllButtonStyle}>
        See All Pandals
      </Link>
    </div>
  );
};

// Styles
const pandalListStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f0f4f8',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  animation: 'fadeIn 1s ease-in-out',
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '20px',
  color: '#4a4a4a',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
};

const gridContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%',
};

const pandalCardStyle = {
  width: '350px',
  margin: '10px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  overflow: 'hidden',
  transition: 'transform 0.3s, box-shadow 0.3s',
  cursor: 'pointer',
};

const pandalNameStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  margin: '10px 0',
  color: '#333',
};

const pandalPlaceStyle = {
  fontSize: '1rem',
  fontWeight: 'normal',
  textAlign: 'center',
  color: '#666',
  margin: '5px 0',
};

const pandalImageWrapperStyle = {
  width: '100%',
  height: '200px',
  overflow: 'hidden',
  borderBottom: '1px solid #ddd',
};

const pandalImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const iconSectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  borderTop: '1px solid #ddd',
  backgroundColor: '#f9f9f9',
};

const iconItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '18%',
  fontSize: '0.8rem',
  color: '#555',
};

const iconTextStyle = {
  fontSize: '0.8rem',
  textAlign: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007BFF',
  fontWeight: 'bold',
  transition: 'color 0.3s, transform 0.3s',
};

const iconStyle = {
  width: '24px',
  height: '24px',
  marginBottom: '5px',
};

// Style for "See All" button
const seeAllButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: '#fff',
  borderRadius: '5px',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: 'background-color 0.3s, transform 0.3s',
};

// Keyframes for animation
const styles = document.createElement('style');
styles.innerHTML = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  /* Hover effect for links */
  a:hover {
    color: #0056b3; /* Change this color as needed */
    transform: scale(1.05); /* Scale effect */
  }
`;
document.head.appendChild(styles);

export default PandalList;
