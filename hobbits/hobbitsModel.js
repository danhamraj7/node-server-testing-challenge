const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  getAll,
  add,
  remove
};

function find() {
  return db("hobbits").select("id", "name");
}

function findById(id) {
  return db("hobbits")
    .where({ id })
    .first();
}

function getAll() {
  return db("hobbits");
}

function add(hobbit) {
  return db("hobbits")
    .insert(hobbit, "id")
    .then(id => findById(id));
}

function remove(id) {
  return db("hobbits")
    .where({ id })
    .del();
}
