const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const massive = require('massive');

const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const { create, getOne, getAll, updateItem, deleteItem } = require("./controllers/products");

app.use(express.json())

massive(CONNECTION_STRING)
  .then(db =>  app.set("db", db))
  .catch(err => console.error(err))

app
  .post("/api/products", create)
  .get("/api/products/", getAll)
  .get("/api/products/:id", getOne)
  .put("/api/products/:id", updateItem)
  .delete("/api/products/:id", deleteItem)

app.listen(SERVER_PORT, () => console.log(`Guess who's back?`))