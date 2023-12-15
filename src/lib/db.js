// lib/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'khudii_pakistan',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool;
