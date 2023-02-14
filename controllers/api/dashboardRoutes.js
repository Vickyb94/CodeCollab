
const router = require('express').Router();
const { Post, User, Language } = require('../../models')
const loggedIn = require('../../utils/loggedIn');

router.get('/', async (req, res) => {

  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['userName']
      }
    ]
  });

  // put postData into an array
  const allPosts = postData.map((post) => post.get({ plain: true }));

  res.render('dashboard', {
    allPosts
  });
});

// runs loggedIn middleware first, then posts
router.post('/', loggedIn, async (req, res) => {
  try {
    const newPost = await Post.create({
      content: req.body.content,
      imageLink: cloudinary.image(req.body.imageLink)
    })

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;

// example of functional cloudinary image upload
// router.get('/', async (req, res) => {
//   await res.send(cloudinary.image('https://res.cloudinary.com/dbzzfnp6n/image/upload/v1675990496/city-wallpaper_cnzndh.jpg'))
// });