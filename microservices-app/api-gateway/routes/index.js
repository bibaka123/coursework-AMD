import express from 'express';
import axios from 'axios';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/api/auth/register', async (req, res) => {
    try {
        const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/api/auth/register`, req.body);
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.response?.data?.error || 'Server error' });
    }
});

router.post('/api/auth/login', async (req, res) => {
    try {
        const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/api/auth/login`, req.body);
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.response?.data?.error || 'Server error' });
    }
});

router.post('/api/shorten', verifyToken, async (req, res) => {
    try {
        const response = await axios.post(`${process.env.URL_SERVICE_URL}/api/shorten`, req.body);
        res.json(response.data);
    } catch (err) {
        res.status(err.response?.status || 500).json({ error: err.response?.data?.error || 'Server error' });
    }
});

router.get('/:shortId', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.URL_SERVICE_URL}/${req.params.shortId}`);
        res.redirect(response.request.res.responseUrl); // redirect theo kết quả
    } catch (err) {
        res.status(404).json({ error: 'Short URL not found' });
    }
});

export default router;
