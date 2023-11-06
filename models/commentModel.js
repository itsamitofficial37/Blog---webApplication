const mongoose = require("mongoose");

// route handler

//  schema
const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

//  Model
const Comment = mongoose.model("Comment", commentSchema);

// export
module.exports = Comment;
