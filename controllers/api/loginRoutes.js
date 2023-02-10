
const router = require('express').Router();

router.get('/', async (req, res) => {
  await res.render('login', {
    
  });
});

module.exports = router;