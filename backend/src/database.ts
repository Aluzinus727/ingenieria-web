import mysql2 from 'mysql2/promise'
require('dotenv').config()

const fs = require('fs')

var sql = fs.readFileSync('src/database/database.sql').toString();
console.log(sql)

export const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    multipleStatements: true
})

pool.query(sql)