const express = require('express');
const router = express.Router();

// This function will take the database connection as an argument
module.exports = (db) => {
  
  // Define a GET route to test the API
  router.get('/', (req, res) => {
    res.send('This is the Pandals API');
  });

  // Route to get all pandals
  router.get('/getAll', (req, res) => {
    db.query('SELECT * FROM pandals', (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });
  
  // Route to get a specific pandal by ID
  router.get('/:id', (req, res) => {
    const pandalId = req.params.id;
    db.query('SELECT * FROM pandals WHERE id = ?', [pandalId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'Pandal not found' });
      }
      res.json(results[0]); // Return the first result
    });
  });

  // Define a route for adding a new pandal
  router.post('/', (req, res) => {
    const { name, location, pictures, videos, view_3d, description, place } = req.body;

    db.query('INSERT INTO pandals (name, location, pictures, videos, view_3d, description, place) VALUES (?, ?, ?, ?, ?, ?, ?)', 
      [name, location, pictures, videos, view_3d, description, place], 
      (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name, location });
      }
    );
  });

  return router;
};
