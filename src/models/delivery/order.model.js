// orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'items' }],
  total: Number,
  deliveryAddress: String,

  createdAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  },
  active: {
    type: Boolean,
    default: true
  }

});

module.exports = mongoose.model('orders', orderSchema);
