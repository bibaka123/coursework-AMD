import Url from '../models/url.model.js';
import { nanoid } from 'nanoid';

export const shortenUrl = async (originalUrl) => {
    const shortId = nanoid(6); // Tạo mã ngắn 6 ký tự
    const newUrl = new Url({ originalUrl, shortId });
    await newUrl.save();
    return shortId;
};

export const getOriginalUrl = async (shortId) => {
    const url = await Url.findOne({ shortId });
    if (!url) throw new Error('Short URL not found');
    return url.originalUrl;
};
