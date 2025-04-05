import * as urlService from '../services/url.service.js';

export const createShortUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        const shortId = await urlService.shortenUrl(originalUrl);
        const shortUrl = `${process.env.BASE_URL}/${shortId}`;
        res.json({ shortUrl });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const redirectToOriginal = async (req, res) => {
    try {
        const { shortId } = req.params;
        const originalUrl = await urlService.getOriginalUrl(shortId);
        res.redirect(originalUrl);
    } catch (err) {
        res.status(404).json({ error: 'Short URL not found' });
    }
};
