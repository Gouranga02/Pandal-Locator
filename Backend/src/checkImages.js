const axios = require('axios');

// Function to convert buffer to Base64 string
const bufferToBase64 = (buffer) => {
  return Buffer.from(buffer).toString('base64');
};

const checkImages = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/pandals/getAll');
    
    response.data.forEach((pandal) => {
      const hasImages = pandal.pictures && pandal.pictures.data && pandal.pictures.data.length > 0;
      
      if (hasImages) {
        // Convert image buffer to Base64
        const base64Image = bufferToBase64(pandal.pictures.data);
        console.log(`Pandal: ${pandal.name} has images.`);
        console.log(`Image (Base64): data:image/jpeg;base64,${base64Image}`);
      } else {
        console.log(`Pandal: ${pandal.name} does not have images.`);
      }
    });
  } catch (error) {
    console.error('Error fetching pandals:', error);
  }
};

// Run the check
checkImages();
