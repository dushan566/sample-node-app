// Vulnerable Code: SQL Injection
const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

app.get('/user', (req, res) => {
  const userId = req.query.id;

  // Directly using user input in SQL query - VULNERABLE TO SQL INJECTION
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).send('Database error!');
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
