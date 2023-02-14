
const sequelize = require('../config/connection');

// import seeder functions
const seedPosts = require('../seeds/seedPosts');
const seedLanguages = require('../seeds/seedlanguages');
const seedUsers = require('../seeds/seedUsers');

// run all seeds function
const seed = async () => {
  await sequelize.sync({ force: true});
  console.log("sequelized await");
  await seedUsers();
  console.log("seedUsers awaited");
  await seedPosts();
  console.log("seedPosts awaited");
  await seedLanguages();
  console.log("seedLanguages awaited");
  console.log('Database seeded!');
  process.exit(0);
}

// run the function to seed all data
seed();

