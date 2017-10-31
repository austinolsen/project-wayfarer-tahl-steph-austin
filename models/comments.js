var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Comment = new Schema({
  userRef: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  postRef: {
    type: Schema.Types.ObjectId,
    ref: 'BlogPost'
  },
  content: String,
  date: Date
})

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;