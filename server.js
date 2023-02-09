const express = require('express');
const session = require('express-session');
const expHandlebars = require('express-handlebars');
const routes = require('./controllers');
require('dotenv').config();
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3001;

// loggedIn is the user authentication function
const loggedIn = require('./utils/loggedIn');
// gives handlebars access to loggedIn function
const handlebars = expHandlebars.create({ loggedIn });

// create a session
const sess = {
  secret: 'secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true
};

// tell express that we are using handlebars engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(session(sess));

const db = mysql.createConnection(
   
    {
      host: '127.0.0.1',
      // MySQL Username
      user: process.env.DB_USER,
      // TODO: Add MySQL Password
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
);

app.listen(PORT, () =>
console.log(`Listening at http://localhost:${PORT}`)
); 