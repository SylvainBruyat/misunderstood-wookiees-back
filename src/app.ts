import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', apiRoutes);

export default app;
