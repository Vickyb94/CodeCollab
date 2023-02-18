const express = require('express');
const session = require('express-session');
const expHandlebars = require('express-handlebars');
const routes = require('./controllers');
require('dotenv').config();
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// loggedIn is the user authentication function
const loggedIn = require('./utils/loggedIn');
// gives handlebars access to loggedIn function
const handlebars = expHandlebars.create({ loggedIn });

// cloudinary API
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'dbzzfnp6n',
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
  secure: true
});

// create a session
const sess = {
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// tell express that we are using handlebars engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});