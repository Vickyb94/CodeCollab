
const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('dashboard');
});

// router.post('/', async (req, res) => {
//   try {

//     res.status(200).json(userData);
//   } catch (err) {

//     res.status(400).json(err);
//   }
// });

module.exports = router;