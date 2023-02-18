
const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const { Post, User, Language } = require('../models')
const loggedIn = require('../utils/loggedIn');

// get the posts for the dashboard
router.get('/', async (req, res) => {

  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['userName']
      }
    ]
  });

  // put postData into an array
  const allPosts = postData.map((post) => post.get({ plain: true }));

  // render dashboard with allPosts
  res.render('dashboard', {
    allPosts
  });
});

// get the login form
router.get('/login', async (req, res) => {
  res.render('login', {});    
});

// get the signup form
router.get(`/signup`, async (req,res) => {
  res.render(`signup`, {});
});

// get the logout form
router.get(`/logout`, async (req,res) => {
  res.render(`logout`, {});
});

// router.get(`/dashboard`, async (req,res) => {
//   res.render(`dashboard`, {});
// });    

module.exports = { router };