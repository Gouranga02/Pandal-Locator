const express = require('express');
const bcrypt = require('bcrypt'); // Import bcrypt
const router = express.Router();

module.exports = (db) => {
  // Admin login route
  router.post('/login', (req, res) => {
    const { adminId, password } = req.body;

    const query = 'SELECT * FROM admins WHERE admin_id = ?';
    db.query(query, [adminId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      if (results.length > 0) {
        const admin = results[0];
        // Compare the password with the hashed password stored in the database
        bcrypt.compare(password, admin.password, (err, isMatch) => {
          if (err) {
            return res.status(500).json({ error: 'Error comparing passwords' });
          }
          if (isMatch) {
            return res.status(200).json({ success: true, message: 'Login successful' });
          } else {
            return res.status(401).json({ error: 'Invalid Admin ID or Password' });
          }
        });
      } else {
        return res.status(401).json({ error: 'Invalid Admin ID or Password' });
      }
    });
  });

  return router;
};
