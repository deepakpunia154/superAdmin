const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET
const Admin = require('../models/superAdmin');

// async function requireUserAuth(req, res, next) {
//     const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
//     if (!token) return res.status(401).json({ status: false, message: 'No token provided' });
//     try {
//         const decoded = jwt.verify(token, config.jwtSecret);
//         const user = await User.findById(decoded.userId);
//         if (!user) return res.status(401).json({ status: false, message: 'Invalid user' });
//         req.user = user;
//         next();
//     } catch (err) {
//         return res.status(401).json({ status: false, message: 'Invalid token' });
//     }
// }

async function requireAdminAuth(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ status: false, message: 'No token provided' });
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const admin = await Admin.findById(decoded.id);
        if (!admin) return res.status(401).json({ status: false, message: 'Invalid admin' });
        req.admin = admin;
        next();
    } catch (err) {
        return res.status(401).json({ status: false, message: 'Invalid token' });
    }
}

module.exports = { requireAdminAuth };
