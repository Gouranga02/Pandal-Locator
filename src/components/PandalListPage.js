import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import locationIcon from '../Icons/way.gif';
import videoIcon from '../Icons/video-player.gif';
import picturesIcon from '../Icons/photo-gallery.gif';
import view3dIcon from '../Icons/modelling.gif';
import destinationIcon from '../Icons/destination.gif';
import searchIcon from '../Icons/search.gif';
import homeIcon from '../Icons/home.gif';
import pandalIcon from '../Icons/tent.gif';
import adminIcon from '../Icons/king.gif';
import contactIcon from '../Icons/call.gif';

const PandalListPage = () => {
  const [pandals, setPandals] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState({
    kharagpur: false,
    medinipur: false,
    jhargram: false,
    keshiary: false,
  });
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleLocationChange = (e) => {
    const { name, checked } = e.target;
    setSelectedLocations((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPandals = pandals.filter(pandal => {
    const matchesLocation = !Object.values(selectedLocations).some(Boolean) || selectedLocations[pandal.place.toLowerCase().split(' ')[0]];
    const matchesSearch = pandal.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pandal.place.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (pandal.description && pandal.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesLocation && matchesSearch;
  });

  return (
    <div style={pandalListPageStyle}>
      {/* Navbar */}
      <nav style={navStyle}>
        <div style={logoTextStyle}>
          <h1>Pandal Locator</h1>
        </div>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="/">
              <img src={homeIcon} alt="Home" style={navIconStyle} /> Home
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="/admin">
              <img src={adminIcon} alt="Admin" style={navIconStyle} /> Admin
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="/pandals">
              <img src={pandalIcon} alt="Pandals" style={navIconStyle} /> Pandals
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="#">
              <img src={picturesIcon} alt="Gallery" style={navIconStyle} /> Gallery
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="#">
              <img src={contactIcon} alt="Contact Us" style={navIconStyle} /> Contact Us
            </Link>
          </li>
        </ul>
        <div style={searchContainerStyle}>
          <div style={searchWrapperStyle}>
            <input
              type="text"
              placeholder="Search..."
              style={searchInputStyle}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <img src={searchIcon} alt="Search" style={searchIconInsideStyle} />
          </div>
        </div>
      </nav>

      {/* Heading */}
      <h1 style={headingStyle}>All Durga Pandals</h1>

      <div style={contentContainerStyle}>
        <div style={sidebarStyle}>
          <h2 style={sidebarTitleStyle}>Filter by Location</h2>
          {Object.keys(selectedLocations).map((location) => (
            <label key={location} style={checkboxLabelStyle}>
              <input
                type="checkbox"
                name={location}
                checked={selectedLocations[location]}
                onChange={handleLocationChange}
                style={checkboxStyle}
              />
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </label>
          ))}
        </div>

        <div style={gridContainerStyle}>
          {filteredPandals.length > 0 ? (
            filteredPandals.map((pandal, index) => {
              const imageUrl = pandal.pictures;
              return (
                <div key={index} style={pandalCardStyle}>
                  <h2 style={pandalNameStyle}>{pandal.name}</h2>
                  <h3 style={pandalPlaceStyle}>{pandal.place}</h3>
                  <div style={pandalImageWrapperStyle}>
                    <Link to={`/pandals/${pandal.id}`} style={{ textDecoration: 'none' }}>
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={pandal.name}
                          style={pandalImageStyle}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'path/to/placeholder/image.png';
                          }}
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                    </Link>
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
      </div>
    </div>
  );
};

// Styles
const pandalListPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0',
  backgroundColor: '#f0f4f8',
  minHeight: '100vh',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#333',
  width: '100%',
  height: '50px',
  padding: '0 20px',
  boxSizing: 'border-box',
};

const logoTextStyle = {
  color: '#fff',
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: '15px',
  padding: 0,
  margin: 0,
};

const navItemStyle = {
  backgroundColor: '#fff',
  padding: '5px 10px',
  borderRadius: '8px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const navLinkStyle = {
  color: '#87CEEB',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const searchWrapperStyle = {
  position: 'relative',
};

const searchInputStyle = {
  padding: '8px',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '200px',
  paddingRight: '40px',
};

const searchIconInsideStyle = {
  position: 'absolute',
  right: '10px',
  width: '24px',
  height: '24px',
};

const headingStyle = {
  margin: '20px 0',
};

const contentContainerStyle = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
};

const sidebarStyle = {
  flex: '1',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  marginRight: '20px',
};

const sidebarTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '5px 0',
};

const checkboxStyle = {
  marginRight: '10px',
};

const gridContainerStyle = {
  flex: '3',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
};

const pandalCardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const pandalNameStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const pandalPlaceStyle = {
  fontSize: '1rem',
  color: '#666',
};

const pandalImageWrapperStyle = {
  height: '150px',
  overflow: 'hidden',
};

const pandalImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const iconSectionStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '10px',
};

const iconItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const iconStyle = {
  width: '24px',
  height: '24px',
};

const iconTextStyle = {
  fontSize: '0.7rem',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#119996',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const navIconStyle = {
  width: '20px',
  height: '20px',
  marginRight: '5px',
};

export default PandalListPage;
