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
  .post("/api/product", create)
  .get("/api/product/", getAll)
  .get("/api/product/:id", getOne)
  .put("/api/product/:id", updateItem)
  .delete("/api/product/:id", deleteItem)

app.listen(SERVER_PORT, () => console.log(`Guess who's back?`))