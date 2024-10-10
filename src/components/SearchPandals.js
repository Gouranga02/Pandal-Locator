import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchPandals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pandals, setPandals] = useState([]);
  const [filteredPandals, setFilteredPandals] = useState([]);

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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter pandals based on search term
    const filtered = pandals.filter(pandal =>
      pandal.name.toLowerCase().includes(value.toLowerCase()) ||
      pandal.place.toLowerCase().includes(value.toLowerCase()) ||
      pandal.description.toLowerCase().includes(value.toLowerCase()) // Assuming there's a description field
    );
    setFilteredPandals(filtered);
  };

  return (
    <div style={searchPandalsStyle}>
      <h1 style={headingStyle}>Search Pandals</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name, place, or description"
        style={searchInputStyle}
      />

      <div style={resultsContainerStyle}>
        {filteredPandals.length > 0 ? (
          filteredPandals.map((pandal, index) => (
            <div key={index} style={pandalCardStyle}>
              <h2 style={pandalNameStyle}>{pandal.name}</h2>
              <h3 style={pandalPlaceStyle}>{pandal.place}</h3>
              <div style={pandalImageWrapperStyle}>
                {pandal.pictures ? (
                  <img
                    src={pandal.pictures}
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
              </div>
              <p style={pandalDescriptionStyle}>{pandal.description}</p> {/* Displaying description */}
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

// Styles
const searchPandalsStyle = {
  padding: '20px',
  backgroundColor: '#f0f4f8',
  minHeight: '100vh',
};

const headingStyle = {
  marginBottom: '20px',
};

const searchInputStyle = {
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
  maxWidth: '600px',
  marginBottom: '20px',
};

const resultsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const pandalCardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const pandalNameStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const pandalPlaceStyle = {
  fontSize: '1.2rem',
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

const pandalDescriptionStyle = {
  marginTop: '10px',
  fontSize: '1rem',
  color: '#333',
};

export default SearchPandals;
