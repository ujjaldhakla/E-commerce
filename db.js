const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'ujw@lDh@k@1', // Use your password
    database: process.env.DB_NAME || 'ecommerce_db'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('✅ MySQL Connected');
    }
});

module.exports = db;