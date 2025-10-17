const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.get('/welcome', authMiddleware, (req, res) => {
    const {username, userID, role} = req.userInfo;
    res.json({
        message : 'Welcome to the home page',
        user: {
            _id: userID,
            username,
            role
        }
    });
});

module.exports = router;