const express = require('express');
const { register, login, getMe, forgotPassword } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { registerValidation, validate } = require('../middleware/validators');

const router = express.Router();

router.post('/register', registerValidation, validate, register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/me', protect, getMe);

module.exports = router;
