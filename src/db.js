const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',       // If your MySQL is hosted locally
  user: 'root',            // Replace with your MySQL username
  password: 'gouranga', // Replace with your MySQL password
  database: 'pandal_db'    // The database you created in Step 2
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

module.exports = connection;
