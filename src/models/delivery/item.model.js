// itemModel.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,

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

module.exports = mongoose.model('items', itemSchema);