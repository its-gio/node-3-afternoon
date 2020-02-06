const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const massive = require('massive');

const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
  .then(db =>  app.set("db", db))
  .catch(err => console.error(err))

app
  .use(express.json())

app.listen(SERVER_PORT, () => console.log(`Guess who's back?`))