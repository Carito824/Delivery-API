// menuModel.js
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'items' }],
  
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

module.exports = mongoose.model('menus', menuSchema);
