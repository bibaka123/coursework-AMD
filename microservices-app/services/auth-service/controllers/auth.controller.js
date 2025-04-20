import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.register(email, password);
        res.status(201).json({ message: 'User registered', user: { id: user._id, email: user.email } });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService.login(email, password);
        res.json(result); // Trả về token
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

export const getProfile = async (req, res) => {
    try {
        const userId = req.params.userId;

        const user = await authService.getProfileService(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ success: true, data: user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
