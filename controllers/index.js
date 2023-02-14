
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


module.exports = router;