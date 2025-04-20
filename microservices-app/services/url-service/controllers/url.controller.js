import * as urlService from '../services/url.service.js';

export const createShortUrl = async (req, res) => {
    try {
        const { originalUrl, userId } = req.body;
        const shortId = await urlService.shortenUrl(originalUrl, userId);
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

export const userUrl = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Gọi service để lấy URLs của user
        const urls = await userUrlService(userId);

        if (!urls || urls.length === 0) {
            return res.status(404).json({ error: 'No URLs found for this user.' });
        }

        res.json({ success: true, data: urls });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
