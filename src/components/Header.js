// src/components/Header.js
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../Images/logo.png'; // Replace with your actual logo path
import searchIcon from '../Icons/search.gif'; // Search icon
import locationIcon from '../Icons/location.gif'; // Location icon
import homeIcon from '../Icons/home.gif'; // Home icon
import photoIcon from '../Icons/photo-gallery.gif'; // Gallery icon
import callIcon from '../Icons/call.gif'; // Call icon
import tentIcon from '../Icons/tent.gif'; // Tent icon (Pandals)
import kingIcon from '../Icons/king.gif'; // King icon for Admin
import pandal1 from '../Images/Pandal11.jpeg'; // Replace with your local image path
import pandal2 from '../Images/Pandal22.jpeg'; // Another local image example
import pandal3 from '../Images/Pandal33.jpeg'; // Additional pandal image
import pandal4 from '../Images/Pandal44.jpeg'; // Additional pandal image
import pandal5 from '../Images/Pandal55.jpeg'; // Additional pandal image
import pandal6 from '../Images/Pandal66.jpeg'; // Additional pandal image

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true, // Smooth fading effect between slides
  };

  const images = [
    { src: pandal1, text: "Happy Durga Puja To All" },
    { src: pandal2, text: "Visit Pandal With Us" },
    { src: pandal3, text: "Festivity Unleashed" },
    { src: pandal4, text: "Cultural Tradition" },
    { src: pandal5, text: "Spiritual Serenity" },
    { src: pandal6, text: "Joyous Celebration" },
  ];

  return (
    <header>
      {/* Top navigation bar */}
      <div style={topNavStyle}>
        <div style={logoTextContainerStyle}>
          <h1 style={logoTextStyle}>Pandal Locator</h1>
        </div>

        {/* Search bar and location selector */}
        <div style={searchContainerStyle}>
          <div style={searchWrapperStyle}>
            <input type="text" placeholder="Search..." style={searchInputStyle} />
            <img src={searchIcon} alt="Search" style={searchIconInsideStyle} />
          </div>
          <div style={locationWrapperStyle}>
            <select style={locationSelectStyle}>
              <option value="">Select Location</option>
              <option value="kolkata">Kolkata</option>
              <option value="kharagpur">Kharagpur</option>
              <option value="medinipur">Medinipur</option>
              <option value="jhargram">Jhargram</option>
              <option value="keshiary">Keshiary</option>
            </select>
            <img src={locationIcon} alt="Location" style={locationIconInsideStyle} />
          </div>
        </div>
      </div>

      {/* Logo on the left */}
      <div style={logoContainerStyle}>
        <img src={logo} alt="Pandal Locator Logo" style={logoStyle} />
      </div>

      {/* Slider */}
      <div style={sliderContainerStyle}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={slideStyle}>
              <img src={image.src} alt={`Slide ${index}`} style={imageStyle} />
              {/* Text Overlay */}
              <div style={textOverlayStyle}>
                <h2>{image.text}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Navbar below the slider */}
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="/">
              <img src={homeIcon} alt="Home" style={navIconStyle} /> Home
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="/admin/login"> {/* Navigate to the admin page */}
              <img src={kingIcon} alt="Admin" style={navIconStyle} /> Admin
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="/pandals">
              <img src={tentIcon} alt="Pandals" style={navIconStyle} /> Pandals
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="#">
              <img src={photoIcon} alt="Gallery" style={navIconStyle} /> Gallery
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link style={navLinkStyle} to="#">
              <img src={callIcon} alt="Contact Us" style={navIconStyle} /> Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Styles for the top navigation bar
const topNavStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 20px',
};

const logoTextContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoTextStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#ff4500', // Bright orange text for "Pandal Locator"
  margin: 0,
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px', // Adding space between search box and location box
};

const searchWrapperStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
};

const searchInputStyle = {
  padding: '8px',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '200px',
  paddingRight: '40px', // Enough space for the icon
};

const searchIconInsideStyle = {
  position: 'absolute',
  right: '10px',
  width: '24px',
  height: '24px',
};

const locationWrapperStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
};

const locationSelectStyle = {
  padding: '8px',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  width: '200px',
  paddingRight: '40px', // Enough space for the icon
};

const locationIconInsideStyle = {
  position: 'absolute',
  right: '10px',
  width: '24px',
  height: '24px',
};

// Styles for the logo on the left
const logoContainerStyle = {
  position: 'absolute',
  top: '10px',
  left: '20px',
  zIndex: 10,
};

const logoStyle = {
  height: '100px',
  width: 'auto',
};

// Styles for the slider
const sliderContainerStyle = {
  width: '100%',
  position: 'relative',
  marginTop: '0px',
  zIndex: 1,
};

const slideStyle = {
  position: 'relative',
};

const imageStyle = {
  width: '100%', // Full width of the container
  height: '80vh', // Set a fixed height for the slider
  objectFit: 'cover', // This will fill the container and prevent distortion
};

// Styles for text overlay on images
const textOverlayStyle = {
  position: 'absolute',
  bottom: '20%',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#fff',
  fontSize: '2rem',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  padding: '10px 20px',
  borderRadius: '8px',
};

// Navbar Styles (below slider)
const navStyle = {
  marginTop: '20px',
  backgroundColor: '#333',
  width: '100%',
  padding: '20px 0',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  gap: '50px',
  padding: 0,
  margin: 0,
};

const navItemStyle = {
  backgroundColor: '#fff', // White background for each nav item
  padding: '10px 20px',
  borderRadius: '8px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Hover effect transition
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const navLinkStyle = {
  color: '#87CEEB', // Sky color for text
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  textAlign: 'center',
};

// Icon styles
const navIconStyle = {
  width: '24px',
  height: '24px',
  marginRight: '8px',
};

// Hover effect for navbar items
navItemStyle[':hover'] = {
  transform: 'scale(1.05)', // Slightly scale up on hover
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Add glow effect
};

export default Header;
