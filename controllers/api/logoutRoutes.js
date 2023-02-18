
const router = require('express').Router();
// const {allPosts} = require('./index');

router.post('/', async (req,res)=> {
  req.session.save(() => {
    req.session.loggedIn = false;
    console.log(`After logout loggedIn status: ${req.session.loggedIn}`);
  });
  
  // render dashboard again with allPosts
  res.render('dashboard');
});

module.exports = router;