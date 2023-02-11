
const router = require('express').Router();
const { Post } = require('../../models')

router.get('/', async (req, res) => {

  const postData = await Post.findAll({
    include: [
      {
        model: Post,
        attributes: ['content', 'imageLink', 'postUser_id']
      }
    ]
  });

  const allPosts = postData.map((post) => {
    post.get({ plain: true });
  })

  res.render('dashboard', {
    allPosts
  });
});

// router.post('/', async (req, res) => {
//   try {

//     res.status(200).json(userData);
//   } catch (err) {

//     res.status(400).json(err);
//   }
// });

module.exports = router;