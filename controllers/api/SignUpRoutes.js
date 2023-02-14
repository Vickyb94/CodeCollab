
const router = require('express').Router();

router.get('/', async (req, res) => {
  await res.render('signup', {
    
  });
});

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword
    })

  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;