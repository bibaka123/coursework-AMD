import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const urlSchema = new mongoose.Schema({
    shortId: { type: String, required: true, unique: true },
    userId: { type: ObjectId, ref: 'User' },
    originalUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Url = mongoose.model('Url', urlSchema);
export default Url;
