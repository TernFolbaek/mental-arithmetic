import mysql from 'mysql2/promise';

// Replace with your own values
const HOST = 'localhost';
const USER = 'tern';
const PASSWORD = 'jelkokelkojelkomerlin';
const DATABASE = 'mental_math';

export const db = mysql.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

db.getConnection()
  .then(connection => {
    console.log('Successfully connected to the database');
    connection.release();
  })
  .catch(error => {
    console.error('Error connecting to the database: ', error);
  });
