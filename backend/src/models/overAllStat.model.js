const mongoose = require('mongoose');

const overAllStatSchema = new mongoose.Schema({
    totalCustomers: Number,
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
    dailyData: [{
        date: String,
        totalSales: Number,
        totalUnits: Number
    }],
    salesByCategory: {
        type: Map,
        of: Number
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('overallStat', overAllStatSchema);