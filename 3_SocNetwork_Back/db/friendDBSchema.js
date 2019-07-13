const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let friendSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    User_id: mongoose.Schema.Types.ObjectId,
    Friend_id: mongoose.Schema.Types.ObjectId
});

let friendModel = mongoose.model('Friends', friendSchema);

module.exports = friendModel;