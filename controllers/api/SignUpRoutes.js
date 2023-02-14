const { User }= require(`../../models`);
const router = require('express').Router();

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
      req.session.logged_in = true;
      console.log("Created new user");

  res.json(newUser);
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err)
  }
})

module.exports = router;