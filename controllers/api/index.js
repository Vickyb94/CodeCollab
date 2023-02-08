
const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const signupRoutes = require('./signupRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/dashboard', dashboardRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);

module.exports = router;