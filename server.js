const express = require('express');
const routes = require('./controllers');
require('dotenv').config();
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const db = mysql.createConnection(
   
    {
      host: 'localhost',
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