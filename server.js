const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

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
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});


