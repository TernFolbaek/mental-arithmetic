import { Request, Response } from 'express';
import mysql from 'mysql2/promise';
import { v4 as uuidv4 } from 'uuid';

// You would usually create a separate service or similar for database actions
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Tern2004',
  database: 'mentalMath'
});

export const createUser = async (req: Request, res: Response) => {
  const userId = uuidv4(); // generate unique user ID

  try {
    await db.query('INSERT INTO users (id) VALUES (?)', [userId]);
    res.json({ userId: userId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
