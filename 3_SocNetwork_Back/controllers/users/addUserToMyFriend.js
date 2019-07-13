const mongoose = require('mongoose');
const friendModel = require('../../db/friendDBSchema');
const config = require('../config');
const localStorage = require('../localStorage');

module.exports = async (req, res) => {
    try{
        const friendId = req.params.id;
        const userId = config.curentUserId;//localStorage.getObjItem(config.curentUserKey)._id;
    
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
            if (err) throw err;
                            
            var newFriend = new friendModel({
                _id: new mongoose.Types.ObjectId(),
                User_id: userId,
                Friend_id: friendId
            });

            await friendModel.create(newFriend);
        res.status(200).json({succses: true}); 
        })     
    }
    catch(e){
        console.log(e);
    }
};