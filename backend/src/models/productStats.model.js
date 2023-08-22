const mongoose = require('mongoose');

const productStatSchema = new mongoose.Schema({
  productId: String,
  yearlySalesTotal: Number,
  yearlyTotalSoldUnits: Number,
  year: Number,
  monthlyData: [
    {
        month: String,
        totalSales: Number,
        totalUnits: Number
    }
  ], 
  dailyData: [
    {
        date: String,
        totalSales: Number,
        totalUnits: Number
    }
  ]
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('productStat', productStatSchema);