var db = require("./models");
var controller = require('./controller');

var userList =[
  {"username": "minnie", "password": "password", "avatar": "3", "name":"Minnie Mouse", 
    "location":"Disneyland, CA" },
  {"username": "sammy", "password": "password", "avatar": "1", "name":"Sam Spade", 
    "location":"Casa Blanca" },
  {"username": "freddie", "password": "password", "avatar": "0", "name":"Freddie Krueger", 
    "location":"Your Dreams, MN" },
  {"username": "sally", "password": "password", "avatar": "2", "name":"Sally Urpally", 
    "location":"Las Vegas, NV" }
]

var blogList = [
  {"userRef": {"type": "???", "ref": 'User'}, "location": "San Francisco",
    "title": "My blog title",  
    "content":"This is he content of the posting.", 
    "date": "Thu Oct 01 2017 12:25:11 GMT-0700 (PDT)"},
  {"userRef": {"type": "???", "ref": 'User'}, "location": "San Francisco",
    "title": "My blog title",  
    "content":"This is he content of the posting.", 
    "date": "Thu Oct 01 2017 12:25:11 GMT-0700 (PDT)"},
  {"userRef": {"type": "???", "ref": 'User'}, "location": "San Francisco",
    "title": "My blog title",  
    "content":"This is he content of the posting.", 
    "date": "Thu Oct 01 2017 12:25:11 GMT-0700 (PDT)"}
]

var commentList = [
  {"userRef": {"type": "???", "ref": 'User'}, "postRef": {"type": "???", "ref": 'BlogPost'}, 
  "content": "This is a comment", "date": "Thu Oct 01 2017 12:25:11 GMT-0700 (PDT)"},
  {"userRef": {"type": "???", "ref": 'User'}, "postRef": {"type": "???", "ref": 'BlogPost'}, 
  "content": "This is a comment", "date": "Thu Oct 01 2017 12:25:11 GMT-0700 (PDT)"},
  {"userRef": {"type": "???", "ref": 'User'}, "postRef": {"type": "???", "ref": 'BlogPost'}, 
  "content": "This is a comment", "date": "Thu Oct 01 2017 12:25:11 GMT-0700 (PDT)"}
]  


db.UserSchema.remove({}, function(err, success) {
    db.UserSchema.create(userList, function(err, weight) {
        console.log("Created ", userList.length, " users");
        db.BlogPost.remove({}, function(err, success) {
            db.BlogPost.create(profileList, function(err, profile) {
                console.log("Created ", blogList.length, " blogs");
                db.Comment.remove({}, function(err, success) {
                    db.Comment.create(commentList, function(err, weight) {
                      console.log("Created ", commentList.length, " comments");
                      process.exit();
                    });
                });
            });
        });
    });
});


