const { User }= require(`../../models`);
const router = require('express').Router();

router.get('/', async (req, res) => {
  await res.render('signup', {
    
  });
});

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });

  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;