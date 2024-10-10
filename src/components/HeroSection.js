// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero bg-primary text-white text-center py-5">
      <div className="container">
        <h2>Welcome to Durga Pandal Locator</h2>
        <p>Find the nearest Durga Pandals and join the celebrations!</p>
        <a href="#pandal-locator" className="btn btn-light btn-lg">Locate Pandals</a>
      </div>
    </div>
  );
};

export default HeroSection;
