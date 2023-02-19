const loggedIn = require('../../utils/loggedIn');
const cloudinary = require('cloudinary').v2;
const router = require('express').Router();
const { Post, User, Language } = require('../../models')
let loggedInUser;


router.post('/', async (req, res) => {
  try {
    // check to see if login credentials match the ones saved in the database
    const userLogin = await User.findOne({
      where: {
        userEmail: req.body.username,
        userPassword: req.body.password
      }
    })

    if (!userLogin) {
      // tell the user their input was invalid without being too specific
      res.status(400).json('Incorrect Email or Password, please try again.');
    } else {
      // if everything matches up with the database
      await req.session.save(() => {
        // set the loggedIn session status of the user to true
        req.session.loggedIn = true;
        // save the users id to the session for later use
        req.session.userId = userLogin.id;
        const loggedInUser = req.session.userId

        console.log(`loggedIn status after login: ${req.session.loggedIn}`);
        // tell the user they have successfully logged in
        res.status(200).json(`Welcome back ${userLogin.userName}!`);
      })
    }
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;