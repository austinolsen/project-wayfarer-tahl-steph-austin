var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPost = new Schema({
  userRef: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

})

var BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;