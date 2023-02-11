
const sequelize = require('../config/connection');

// import seeder functions
const seedPosts = require('../seeds/seedPosts');
const seedLanguages = require('../seeds/seedlanguages');
const seedUsers = require('../seeds/seedUsers');

// run all seeds function
const seed = async () => {
  await sequelize.sync({ force: true});
  await seedUsers();
  await seedPosts();
  await seedLanguages();
  console.log('Database seeded!');
}

// run the function to seed all data
seed();

