import express from 'express';
import cors from 'cors';
import { HealthController } from './health/health.controller';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get('/health', HealthController.check);
app.get('/', (req, res) => {
    res.send('CRUMBELLE API is running.');
});

export default app;
