const config = require('../config');
const localStorage = require('../localStorage');
const mongoose = require('mongoose');
const userModel = require('../../db/dbSchema');

module.exports = async (req, res) => {
    try {
        let name = req.body.name;
        let password = req.body.password;
        
        await mongoose.connect(config.mongourl, {useNewUrlParser: true}, async function (err) {
            if (err) throw err;
                            
            await userModel.findOne({email: name, password: password})
            .exec(function(err, user) {
                
                user = localStorage.getObjItem(config.curentUserKey);
                res.render('logout',{
                    myUser: user
                });  
            });
        })
    } catch {
        console.log(e);
    }    
};

        

