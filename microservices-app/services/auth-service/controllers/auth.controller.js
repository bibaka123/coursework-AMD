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
