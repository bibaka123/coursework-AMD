import Url from '../models/url.model.js';
import { nanoid } from 'nanoid';

export const shortenUrl = async (originalUrl, userId) => {
    const shortId = nanoid(6);

    const urlData = { originalUrl, shortId };
    if (userId && mongoose.Types.ObjectId.isValid(userId)) {
        urlData.userId = userId;
    }

    const newUrl = new Url(urlData);
    await newUrl.save();
    return shortId;
};

export const getOriginalUrl = async (shortId) => {
    const url = await Url.findOne({ shortId });
    if (!url) throw new Error('Short URL not found');
    return url.originalUrl;
};
