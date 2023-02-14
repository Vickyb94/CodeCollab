const { User }= require(`../../models`);
const router = require('express').Router();

router.get('/', async (req, res) => {
  await res.render('signup', {
    
  });
});

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      userName: req.body.username,
      userEmail: req.body.email,
      userPassword: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
      console.log(userData);
      console.log("Created new user");
    });

  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;