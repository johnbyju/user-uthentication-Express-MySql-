import mysql from 'mysql2';
import dotenv from dotenv;
dotenv.config();
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'minmegam'

}).promise()

export default pool