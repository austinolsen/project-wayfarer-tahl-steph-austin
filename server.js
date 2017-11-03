var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var db = require("./models")

var app = express(),
    router = express.Router();

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


//************* ROUTES **************
commentsDb = [
    {
      postRef: "2",
      username: "tahl",
      comment: "very interesting article.  I would recommend you have a cigar.",
      date: "Thu Jul 02 1954 12:09:08 GMT-0700 (PDT)"
    }, {
      postRef: "2",
      username: "minny",
      comment: "hehe, it's great",
      date: "Thu Jan 12 1934 12:09:08 GMT-0700 (PDT)"
    }, {
      postRef: "1",
      username: "freddie",
      comment: "I'm coming to get you",
      date: "Thu May 15 2017 12:09:08 GMT-0700 (PDT)"
    }
  ];
  postDb = [
    {
      postRef: "0",
      username: "minny",
      location: "Vancouver",
      title: "This is why you should visit Vancouver BC",
      content: "Vancouver BC is not just a winter wonderland, so forth",
      date: "Thu Jan 02 2017 12:09:08 GMT-0700 (PDT)"
    }, {
      postRef: "1",
      username: "tahl",
      location: "London",
      title: "Make London your next stop",
      content: "London is a great place to scare people in their dreams",
      date: "Thu May 22 2017 12:09:08 GMT-0700 (PDT)"
    }, {
      postRef: "2",
      username: "tahl",
      location: "San Francisco",
      title: "San Francisco is a great place for shaking it",
      content: "Since the first time I visited San Francisco until today...",
      date: "Thu Jun 12 2017 12:09:08 GMT-0700 (PDT)"
    }
  ];

  citiesArray = [
    {
    name: "San Francisco",
    img: "img/San Francisco.jpg",
    description: "SF description"
  }, {
    name: "New York",
    img: "img/New York.jpeg",
    description: "New York description"
  }, {
    name: "Vancouver",
    img: "img/Vancouver.jpg",
    description: "Vancouver description"
  }
];

//**** POSTBLOG ROUTES ****
//READ ALL by cityname for city page
//http://url:port/blogs?cityName=foo
app.get('/blogs', function getBlogsByCity(req, res){
	var plainCity = decodeURI(req.query.cityName);
	var postsIWant = postDb.filter(function (entry) {
		return entry.location === plainCity;
	});
	console.log("##",plainCity,postsIWant);
	res.json(postsIWant);
});

//READ ONE by id for Blogpost page
//http://url:port/blog?id=foo
app.get('/blog', function getBlogById(req, res){
	var id = decodeURI(req.query.id);
	var postIWant = postDb.filter(function (entry) {
		return entry.postRef === id;
	});
	console.log("##",id,postIWant);
	res.json(postIWant);
});

//READ ALL by userid for user profile page
//http://url:port/userblogs?username=foo
app.get('/userblogs', function getBlogByUser(req, res){
	var username = decodeURI(req.query.username);
  console.log("##1",username,postDb[0].username);
	var postsIWant = postDb.filter(function (entry) {
		return entry.username === username;
	});
	console.log("##",username,postsIWant);
	res.json(postsIWant);
});

//CREATE a blogpost
//http://url:port/blog
//need to pass username, location, title, content
app.post('/blog', function createBlog(req, res) {
	console.log("$$",req.body);
	var newBlog = {};
	var newIndex = postDb.length++;
	newBlog.postRef = newIndex.toString();
	newBlog.username = req.body.username;
	newBlog.location = req.body.location;
	newBlog.title = req.body.title;
	newBlog.content = req.body.content;
	newBlog.date = Date();
	postDb.push(newBlog);
	res.json(newBlog);
});

//**** COMMENTS ROUTES ****
//READ ALL comments by postID
//http://url:port/comments?postRef=foo
app.get('/comments', function getCommentsByPost(req, res){
	var postRef = decodeURI(req.query.postRef);
	var commentsIWant = commentsDb.filter(function (entry) {
		return entry.postRef === postRef;
	});
	console.log("##",postRef,commentsIWant);
	res.json(commentsIWant);
});
//CREATE (post) on blogpost page
//READ ALL (get) by postId on blogpost page
//READ ALL (get) by userId on profile page

//**** AUTH/USER ROUTES ****
//CREATE an account
//http://url:port/signup
//need to pass username, password
app.post('/signup', function signup(req, res) {
  console.log(`${req.body.username} ${req.body.password}`);
  db.User.register(new db.User({ username: req.body.username }), req.body.password,
    function (err, newUser) {
      passport.authenticate('local')(req, res, function() {
        res.send(newUser);
      });
    }
  )});

//For LOGGING IN
//http://url:port/login
//need to pass user; returns __
app.post('/login', passport.authenticate('local'), function (req, res) {
  console.log('in APP.POST for LOGIN')
  console.log(JSON.stringify(req.user));
  res.send(req.user);
});

//For LOGGING OUT
//http://url:port/logout
app.get('/logout', function (req, res) {
  console.log("BEFORE logout", req);
  req.logout();
  res.send(req);
  console.log("AFTER logout", req);
});

//For UPDATING USERS PROFILE
//http://url:port/update
//need to pass username (as key only), location, name, avatar
app.put('/update', function updateUser(req, res){
  	console.log("user profile update .. req.body: ", req.body)

	db.User.findOneAndUpdate(
 		{username: req.body.username},
 		{location:req.body.location, name:req.body.name, avatar:parseInit(req.body.avatar)},
 		{new: true},
 		function updatedCat(err, succ){
 			if(err){return console.log(err)}
 			res.json(succ);
		}
	);
});

//READ 1 (get) by userId on profile page
//http://url:port/profile?username=foo
app.get('/profile', function getProfile(req, res){
    var username = req.query.username;
    console.log(username);
    db.User.find({username:username},function(err, success){
        if(err){return console.log(err)}
        res.json(success);
    });
});


//**** WEBSERVER ****
const port = process.env.API_PORT || 3001;
app.listen(port, function(){
  console.log(`api running on ${port}`);
});
