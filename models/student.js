const mongoose = require('mongoose');

const studenSchema = new mongoose.Schema({
    std_id: { type: String, require: true},
    std_name: { type: String, require: true},
    major: { type: String, require: true},
    faculty: { type: String, require: true},
    gender: { type: String, require: true},
    tel: { type: String, require: false},
    email: { type: String, require: false},
}, { timestamps: true, versionKey: false } );

module.exports = mongoose.model('Student', studenSchema);