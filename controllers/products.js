module.exports.create = (req, res) => {
  const { name, description, price, image_url } = req.body;
  const db = req.app.get("db");

  db.create_product(name, description, price, image_url)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err));
}

module.exports.getOne = (req, res) => {
  const { id } = req.params;
  const db = req.app.get("db");

  db.read_product(id)
    .then(product => res.status(200).json(product))
    .catch(err => console.error(err));
}

module.exports.getAll = (req, res) => {
  const db = req.app.get("db");

  db.read_products()
    .then(productsArr => res.status(200).json(productsArr))
    .catch(err => console.error(err))
}

module.exports.updateItem = (req, res) => {
  const { id } = req.params;
  const { desc } = req.query;
  const db = req.app.get("db");

  db.update_product(id, desc)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err));
}

module.exports.deleteItem = (req, res) => {
  const { id } = req.params;
  const db = req.app.get("db");

  db.delete_product(id)
    .then(() => res.status(200))
    .catch(err => console.error(err));
}