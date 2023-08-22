const OverAllStat = require('../models/overAllStat.model')

const getSales = async (req, res) => {
    try {
        const overallStats = await OverAllStat.find();
        console.log(overallStats)
        
        res.status(200).json(overallStats[0]);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = getSales