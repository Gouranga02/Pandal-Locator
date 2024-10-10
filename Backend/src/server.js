// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const config = require('./config'); // Import config
const pandalRoutes = require('./routes/pandalRoutes'); // Import pandal routes
const adminRoutes = require('./routes/AdminRoutes'); // Import admin routes

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // Enable Cross-Origin Request

// Create MySQL connection
const db = mysql.createConnection(config.db);

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Use the pandal routes for any request starting with '/api/pandals'
app.use('/api/pandals', pandalRoutes(db)); // Pass db connection to routes
app.use('/api/admin', adminRoutes(db)); // Add admin routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
