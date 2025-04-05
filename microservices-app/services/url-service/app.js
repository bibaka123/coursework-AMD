import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import urlRoutes from './routes/url.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(' MongoDB Error:', err));

app.use('/', urlRoutes); // redirect và API tạo URL

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`URL Service running on port ${PORT}`);
});
