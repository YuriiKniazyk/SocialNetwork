let mongoose = require('mongoose');
let config = require('./config');
let passport = require('passport');
const UserModel = require('../db/dbSchema');
const LocalStrategy = require('passport-local').Strategy;
const localStorage = require('../controllers/localStorage');

passport.serializeUser(function (user, done) {    
    
    localStorage.setObjItem(config.curentUserKey, user);  
    done(null, JSON.stringify(user));  
});

passport.deserializeUser(function (strUser, done) {

    let data = JSON.parse(strUser);
    done(null, data);
});

let strategyLocal = new LocalStrategy(
    {
        passwordField: 'password',
        usernameField: 'name',
        passReqToCallback: true
    },
    
    function (req, username, password, done) {
        //console.log('u:',username, 'p:',password);
        try { 
            mongoose.connect(config.mongourl, {useNewUrlParser: true}, function () {
                            
                UserModel.findOne(
                    {
                        email: username,
                        password: password
                    }
                )
                .exec(function(err, user) {
            
                    if (err) throw err;
                    if (!user) {user = {Message: 'ERROR!!! User is not found!!!'};
                        done(null, false);
                    } else{
                        done(null, user);
                    }
                });
            });
        } catch (e) {
            done(e);
        }
    }
);

passport.use('login', strategyLocal);