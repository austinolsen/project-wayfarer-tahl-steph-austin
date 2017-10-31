var express = require('express'),
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;


var app = express(),
  router = express.Router();

  userDb = [
    {
      username: "sammy",
      password: "123456",
      avatar: 1,
      name: "Sam Spade",
      location: "Casa Blanca"
    }, {
      username: "minny",
      password: "abcdef",
      avatar: 2,
      name: "Minnie Mouse",
      location: "Disneyland, CA"
    }, {
      username: "freddie",
      password: "12ab34",
      avatar: 3,
      name: "Freddie Krueger",
      location: "Your Dreams, MN"
    }
  ];
  //to config API to use body body-parser and look for JSON in req.body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret: 'citiessecret007', // change this!
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//passport config
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

//Prevent CORS errors
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});