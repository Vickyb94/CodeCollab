
const { User } = require('../models');

const userData = [
    {
        userName: "John Doe",
        userEmail: "johndoe@email.com",
        userPassword: "Password1234"
    }
]

const seedUsers = () => {
    return User.bulkCreate(userData);
    }

module.exports = seedUsers;
