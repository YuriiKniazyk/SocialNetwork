const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const opn = require('opn');
const cors = require('cors');
require('./controllers/passport');
const passport = require('passport');
const config = require('./controllers/config');
const createUser = require('./controllers/users/create_user');
const all_usersID = require('./controllers/users/all_usersID');
const findUser = require('./controllers/users/find_user');
const addTofriend = require('./controllers/users/addToFriend');
const addUserToMyFriend = require('./controllers/users/addUserToMyFriend');
const loginUser = require('./controllers/users/loginuser');
const error404 = require('./controllers/error404');

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'sw3irjwer6546786a7dasd',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

var whitelist = ['http://localhost:4200', 'http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", '*');
  next();
});

app.set('views', 'views_pug');
app.set('view engine', 'pug');

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/user',cors(corsOptions), createUser);
app.post('/login', passport.authenticate('login',{failureRedirect: '/fail', session: true}), function (req, res) {
    res.redirect('/profile');
});
app.get('/people',cors(corsOptions), addTofriend);
app.get('/find-user',cors(corsOptions), findUser);
app.get('/user/:id', cors(corsOptions), all_usersID);
app.post('/friend/:id', cors(corsOptions), addUserToMyFriend);
app.get('/profile', cors(corsOptions), loginUser);
app.get('/logout', cors(corsOptions), function (req, res) {
    req.logout();
    res.redirect('/');
});
app.use('*',cors(corsOptions), error404);

app.listen(config.port, err => {
    console.log('Server listen on port ' + config.port + '...');

    if (config.itsStartupServer){
        opn('http://localhost:' + config.port);
    }
});