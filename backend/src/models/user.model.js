const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {type: String, required: true, min: 2, max: 100},
    email: {type: String, required: true, max: 50, unique: true},
    password: {type: String, required: true, min: 5},
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    tranctions: Array,
    role: {
        type: String,
        enum: ["user", "admin", "superadmin"],
        default: "admin"
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('user', userSchema);