
const router = require('express').Router();

router.get('/', async (req, res) => {
  const posts = await db.query("SELECT * FROM posts")
  res.json(posts);
});

// router.post('/', async (req, res) => {
//   try {

//     res.status(200).json(userData);
//   } catch (err) {

//     res.status(400).json(err);
//   }
// });

module.exports = router;