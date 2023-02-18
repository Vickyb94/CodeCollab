
const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const { Post, User, Language } = require('../models')
const loggedIn = require('../utils/loggedIn');

// get the posts for the dashboard
let allPosts;
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
  allPosts = postData.map((post) => post.get({ plain: true }));

  // render dashboard with allPosts
  res.render('dashboard', {
    allPosts
  });
});

// log the user out
router.get('/logout', async (req,res)=> {
  req.session.save(() => {
  req.session.loggedIn = false;
  });
  console.log(req.session.loggedIn);
  
  // render dashboard again with allPosts
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

// router.get(`/dashboard`, async (req,res) => {
//   res.render(`dashboard`, {});
// });    

module.exports = router;