import express from 'express';
import { createShortUrl, redirectToOriginal } from '../controllers/url.controller.js';

const router = express.Router();

router.post('/api/shorten', createShortUrl);
router.get('/:shortId', redirectToOriginal);

export default router;
