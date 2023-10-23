// orderService.js
const mongoose = require('mongoose');
const Order = require('../../models/delivery/order.model');

// Funciones para el CRUD de órdenes

// Obtiene todas las órdenes
async function getAll() {
  return await Order.find({});
}

// Obtiene una orden específica
async function get(id) {
  return await Order.findById(id);
}

// Crea una nueva orden
async function create(body) {
  return await Order.create(body);
}

// Actualiza una orden existente
async function update(id, body) {
  return await Order.findByIdAndUpdate(id, body, { new: true });
}

// Elimina una orden existente
async function deleteorder(id) {
  return await Order.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  get,
  create,
  update,
  deleteorder
};