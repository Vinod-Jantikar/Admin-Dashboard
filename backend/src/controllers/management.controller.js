const mongoose = require('mongoose');
const User = require('../models/user.model.js');


const getAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: "admin" }).select("-password");
        res.status(200).json(admins);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { getAdmins }
