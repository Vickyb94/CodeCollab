
const cloudinary = require('cloudinary').v2;
const router = require('express').Router();

// example of functional cloudinary image upload
// router.get('/', async (req, res) => {
//   await res.send(cloudinary.image('https://res.cloudinary.com/dbzzfnp6n/image/upload/v1675990496/city-wallpaper_cnzndh.jpg'))
// });

module.exports = router;