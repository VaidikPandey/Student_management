const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'student_user',
    password: 'Vaidik@07',
    database: 'StudentDB'
});

module.exports = pool;
