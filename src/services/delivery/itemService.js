// itemService.js
const mongoose = require('mongoose');
const Item = require('../../models/delivery/item.model');

// Funciones para el CRUD de items

// Obtiene todos los items
async function getAll() {
  return await Item.find({});
}

// Obtiene un item específico
async function get(id) {
  return await Item.findById(id);
}

// Crea un nuevo item
async function create(body) {
  return await Item.create(body);
}

// Actualiza un item existente
async function update(id, body) {
  return await Item.findByIdAndUpdate(id, body, { new: true });
}

// Elimina un item existente
async function deleteitem(id) {
  return await Item.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  get,
  create,
  update,
  deleteitem
};