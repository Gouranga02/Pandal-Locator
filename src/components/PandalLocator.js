// src/components/PandalLocator.js
import React from 'react';

const PandalLocator = () => {
  return (
    <div id="pandal-locator" className="container my-5">
      <h3 className="text-center">Pandal Locator</h3>
      <div className="row">
        <div className="col-md-12">
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099783!2d144.95592831561516!3d-37.8172099797511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f83b71d%3A0xe41054b94b0c69e5!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1634600789001!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PandalLocator;
