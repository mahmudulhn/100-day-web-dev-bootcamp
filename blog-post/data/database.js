const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: '55668877',
});

module.exports = pool;