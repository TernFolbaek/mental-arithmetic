import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../data/db';

export const createUser = async (req: Request, res: Response) => {
  const userId = uuidv4(); // generate unique user ID

  try {
    await db.query('INSERT INTO users (id) VALUES (?)', [userId]);
    res.json({ userId: userId });
  } catch (err) {
    console.error('Error in createUser:', err);
    res.status(500).json({ message: 'Server error', error: err});
  }
};

