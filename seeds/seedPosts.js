
const { Post } = require('../models');

const postData = [
    {
        content: "Just started using Inquirer!",
        imageLink: "https://res.cloudinary.com/dbzzfnp6n/image/upload/v1676831091/inquirer-code_kh0hvl.png",
        userId: 1
    },
    {
        content: "Created a session for user authentication for my app!",
        imageLink: "https://res.cloudinary.com/dbzzfnp6n/image/upload/v1676831091/session-code_lgbb4e.png",
        userId: 2
    },
    {
        content: "Does anyone know if theres an easier way to do this? My hands are getting tired...",
        imageLink: "https://res.cloudinary.com/dbzzfnp6n/image/upload/v1676831092/console-logging_gmjft8.png",
        userId: 3
    },
];

const seedPosts = () => {
   return Post.bulkCreate(postData);  
}

module.exports = seedPosts;