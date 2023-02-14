
const { User } = require('../models');

const userData = [
    {
        userName: "John Doe",
        userEmail: "johndoe@email.com",
        userPassword: "Password1234"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
