const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: String,
  cost: String,
  products: {
    type: [mongoose.Types.ObjectId],
    of: Number
  }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('transaction', transactionSchema);