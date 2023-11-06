// import mongoose 
const mongoose = require("mongoose");

// route handler 
// schema 

const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
      user: {
        type: String,
        required: true,
      },
});

//  model 
const Like = mongoose.model("Like", likeSchema);

// export 
module.exports = Like;

