
const router = require('express').Router();
// const {allPosts} = require('./index');

router.post('/', async (req,res)=> {
  await req.session.save(() => {
    req.session.loggedIn = false;
    console.log(`After logout loggedIn status: ${req.session.loggedIn}`);

    // render dashboard again
    res.render('dashboard');
  });
});

module.exports = router;