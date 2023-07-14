import express from 'express';
import cors from 'cors';
import router from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


const port = process.env.SERVER_PORT || 5001;
app.use(cors())
app.use(router);

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
