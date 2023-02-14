
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

const { Post, User, Language } = require('../models')
const loggedIn = require('../utils/loggedIn');

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

  res.render('dashboard', {
    allPosts
  });
});

router.get('/login', async (req, res) => {

    res.render('login', {
  
    });    
  });

router.get(`/signup`, async (req,res) => {

    res.render(`signup`, {

    });
    });

    router.get(`/dashboard`, async (req,res) => {

        res.render(`dashboard`, {
    
        });
        });    

module.exports = router;