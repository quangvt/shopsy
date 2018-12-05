const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  sku: { type: Number, require: true, index: { unique: true } },
  name: { type: String, require: true, index: true },
  price: { type: Number, require: true, index: false },
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);
