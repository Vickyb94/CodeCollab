
const cloudinary = require('cloudinary').v2;
const router = require('express').Router();
const { Post, User, Language } = require('../../models')

router.get('/', async (req, res) => {
  await res.render('login')
})

router.post('/', async (req, res) => {
  try {
    // check to see if login credentials match the ones saved in the database
    const userLogin = await User.findOne({
      where: {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword
      }
    })

    if (!userLogin) {
      // tell the user their input was invalid without being too specific
      res.status(400).json('Incorrect Email or Password, please try again.');
      return;
    } else {
      // if everything matches up with the database
      req.session.save(() => {
      // set the loggedIn session status of the user to true
      req.session.loggedIn = true;
    })

    // tell the user they have successfully logged in
    res.status(200).json(`Welcome back ${userLogin.userName}!`);
    }
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;