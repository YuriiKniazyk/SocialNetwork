const mongoose = require('mongoose');
const userModel = require('../../db/dbSchema');
const config = require('../config');

module.exports =  async(req, res) => {
    try{
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
        if (err) throw err;
                        
            await userModel.find({})
            .exec(function(err, users) {
                if (err) throw err;
                
                if (!users.length) {
                    users = {Message: 'ERROR!!! No users on DB'};
                    res.json(users);
                } else {
                    res.json(users);
                }
            });
        })
    } catch{
        console.log(e);
    }    
};