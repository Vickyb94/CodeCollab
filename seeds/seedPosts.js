
const { Post } = require('../models');

const postData = [
    {
        content: "A cool wallpaper I found.",
        imageLink: "https://res.cloudinary.com/dbzzfnp6n/image/upload/v1675990167/cld-sample-4.jpg",
        userId: 1
    },
];

const seedPosts = () => {
   return Post.bulkCreate(postData);  
}

module.exports = seedPosts;