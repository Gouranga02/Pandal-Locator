import React, { useState } from 'react';
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

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setImageUrl(url);
    console.log('Uploaded image available at', url);
    
    // Save URL to MySQL if needed
    await saveImageUrlToDatabase(url);
  };

  const saveImageUrlToDatabase = async (url) => {
    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: url }),
      });

      if (!response.ok) {
        throw new Error('Failed to save image URL');
      }

      const data = await response.json();
      console.log('Response from server:', data.message);
    } catch (error) {
      console.error('Error saving image URL:', error);
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && (
        <div>
          <h3>Uploaded Image URL:</h3>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
