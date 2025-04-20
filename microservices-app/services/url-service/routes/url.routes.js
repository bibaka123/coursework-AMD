import express from 'express';
import { createShortUrl, redirectToOriginal, userUrl } from '../controllers/url.controller.js';

const router = express.Router();

router.post('/api/shorten', createShortUrl);
router.get('/:shortId', redirectToOriginal);
router.get('/api/shorten/user-url/:userId', userUrl);

export default router;
