
const { Post } = require('../models');

const postData = [
    {
        content: "Example content here.",
        imageLink: "https://res.cloudinary.com/dbzzfnp6n/image/upload/v1675990496/city-wallpaper_cnzndh.jpg",
        userId: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;