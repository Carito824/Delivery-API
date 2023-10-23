// menuService.js
const mongoose = require('mongoose');
const Menu = require('../../models/delivery/menu.model');

// Funciones para el CRUD de menus

// Obtiene todos los menus
async function getAll() {
  return await Menu.find({});
}

// Obtiene un menu específico
async function get(id) {
  return await Menu.findById(id);
}

// Crea un nuevo menu
async function create(body) {
  return await Menu.create(body);
}

// Actualiza un menu existente
async function update(id, body) {
  return await Menu.findByIdAndUpdate(id, body, { new: true });
}

// Elimina un menu existente
async function deletemenu(id) {
  return await Menu.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  get,
  create,
  update,
  deletemenu
};