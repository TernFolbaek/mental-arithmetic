import express, { Express } from 'express';
import userRoutes from './routes/userRoutes';

const app: Express = express();

app.use('/api/users', userRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
