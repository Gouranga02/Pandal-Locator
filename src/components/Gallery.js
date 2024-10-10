import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import pandal1 from '../Images/Pandal11.jpeg';
import pandal2 from '../Images/Pandal22.jpeg';
import pandal3 from '../Images/Pandal33.jpeg';
import pandal4 from '../Images/Pandal44.jpeg';
import pandal5 from '../Images/Pandal55.jpeg';
import pandal6 from '../Images/Pandal66.jpeg';
import pandal7 from '../Images/Pandal77.jpeg';
import pandal8 from '../Images/Pandal88.jpeg';
import pandal9 from '../Images/Pandal99.jpeg';
import pandal10 from '../Images/Pandal100.jpeg';

const Gallery = () => {
  const images = [
    {
      original: pandal1,
      thumbnail: pandal1,
      description: 'Pandal 1',
    },
    {
      original: pandal2,
      thumbnail: pandal2,
      description: 'Pandal 2',
    },
    {
      original: pandal3,
      thumbnail: pandal3,
      description: 'Pandal 3',
    },
    {
      original: pandal4,
      thumbnail: pandal4,
      description: 'Pandal 4',
    },
    {
      original: pandal5,
      thumbnail: pandal5,
      description: 'Pandal 5',
    },
    {
      original: pandal6,
      thumbnail: pandal6,
      description: 'Pandal 6',
    },
    {
      original: pandal7,
      thumbnail: pandal7,
      description: 'Pandal 7',
    },
    {
      original: pandal8,
      thumbnail: pandal8,
      description: 'Pandal 8',
    },
    {
      original: pandal9,
      thumbnail: pandal9,
      description: 'Pandal 9',
    },
    {
      original: pandal10,
      thumbnail: pandal10,
      description: 'Pandal 10',
    },
  ];

  return (
    <div style={galleryContainerStyle}>
      <h1 style={headingStyle}>Image Gallery</h1> {/* Updated to use the same style */}
      <ImageGallery
        items={images}
        showFullscreenButton={true}
        showThumbnails={true}
        autoPlay={true}
        slideDuration={450}
        showBullets={true}
      />
    </div>
  );
};

// Styles
const galleryContainerStyle = {
  padding: '20px',
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '20px',
  color: '#4a4a4a',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
};

export default Gallery;
