const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String,
    password: String,
    email: String
});

let userModel = mongoose.model('Users', userSchema);

module.exports = userModel;