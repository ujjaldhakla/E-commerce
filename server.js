const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const db = require('./db');
const path = require('path');
require('dotenv').config();
const { pool } = require('./db');

const app = express();

// Configure MySQL session store
const sessionStore = new MySQLStore({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}, db);

// Middleware setup
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    store: new MySQLStore({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

// [Rest of your existing routes remain exactly the same...]
// Signup, Login, Home, Logout routes go here unchanged

// Start server


// Signup route
// app.post('/signup', async (req, res) => {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
//     db.query(sql, [username, email, hashedPassword], (err) => {
//         if (err) {
//             res.status(500).send('Error storing data');
//         } else {
//             res.send('User registered successfully!');
//         }
//     });
// });

// Signup route with improved error handling
app.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).send('All fields are required.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err) {
                console.error('Signup Error:', err);
                res.status(500).send('Error storing data. Check server logs for details.');
            } else {
                res.send('User registered successfully!');
            }
        });
    } catch (error) {
        console.error('Error in Signup Route:', error);
        res.status(500).send('Server error during signup.');
    }
});


// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).send('Invalid email or password');
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            req.session.userId = user.id;
            res.send('Login successful!');
        } else {
            res.status(400).send('Invalid email or password');
        }
    });
});
// app.get('/get-username', (req, res) => {
//     const userId = req.query.username; // Pass userId as query parameter
//     const query = SELECT username FROM users WHERE id = ?;

//     db.query(query, [userId], (err, results) => {
//         if (err) {
//             return res.status(500).send('Error fetching username');
//         }
//         if (results.length > 0) {
//             res.json({ username: results[0].username });
//         } else {
//             res.status(404).send('User not found');
//         }
//     });
// });
// Home page route (protected)
app.get('/home', (req, res) => {

    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.sendFile(__dirname + '/public/Ecommerce.html');
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// Login page route
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Signup page route
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});