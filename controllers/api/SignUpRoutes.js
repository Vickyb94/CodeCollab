const { User }= require(`../../models`);
const router = require('express').Router();
const loggedIn = require('../../utils/loggedIn');
router.get('/', async (req, res) => {
  await res.render('signup', {
    
  });
});

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      userName: req.body.username,
      userEmail: req.body.email,
      userPassword: req.body.password,
    });
    req.session.save(() => {
      // sets logged_in session status to true
      req.session.loggedIn = true;
      // adds the new users id to session
      req.session.id = newUser.id;
      console.log("Created new user");

  res.json(newUser);
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
})

module.exports = router;