const { User }= require(`../../models`);
const router = require('express').Router();
const loggedIn = require('../../utils/loggedIn');


router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      userName: req.body.username,
      userEmail: req.body.email,
      userPassword: req.body.password,
    });
    await req.session.save(() => {
      // sets logged_in session status to true
      console.log('UPDATE SESSION ON SIGNUP');
      req.session.loggedIn = true;
      // adds the new users id to session
      req.session.userId = newUser.id;

      console.log(`session status after creating a user:`);
      console.log(req.session);
      res.json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
})

module.exports = router;