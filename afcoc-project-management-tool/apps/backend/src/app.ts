import express from 'express';
import { json } from 'body-parser';
import { router as apiRouter } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// Routes
app.use('/api', apiRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});