const express = require('express');
const app = express();
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'loan_system',
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected');
});

// JWT secret
const JWT_SECRET = 'your_jwt_secret'; // Use a more secure secret in production

// Authenticate user and issue token
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ?';
  
  db.query(query, [email], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query error' });
    if (results.length === 0) return res.status(400).json({ error: 'User not found' });
    
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: 'Error comparing passwords' });
      if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
      
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.status(401).json({ error: 'No token provided' });
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Get loan status
app.get('/loan/status', authenticateToken, (req, res) => {
  const userId = req.user.userId;
  const query = 'SELECT * FROM loan_applications WHERE user_id = ? ORDER BY application_date DESC';
  
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query error' });
    res.json(results);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
