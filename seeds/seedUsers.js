
const { User } = require('../models');

const userData = [
    {
        userName: "John Doe",
        userEmail: "johndoe@email.com",
        userPassword: "John"
    },
    {
        userName: "James Bond",
        userEmail: "jamesbond@email.com",
        userPassword: "James"
    },
    {
        userName: "Ben Smith",
        userEmail: "bensmith@email.com",
        userPassword: "Ben"
    },
    {
        userName: "Hannah Smith",
        userEmail: "hannahsmith@email.com",
        userPassword: "Hannah"
    },
]

const seedUsers = () => {
    return User.bulkCreate(userData);
    }

module.exports = seedUsers;
