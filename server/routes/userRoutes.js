import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/new', userController.createUser);

export default router;
