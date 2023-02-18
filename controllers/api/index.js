
const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const signupRoutes = require('./SignupRoutes');
const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');

router.use('/dashboard', dashboardRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);

module.exports = router;