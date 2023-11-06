// import link 

const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// Business logic 

exports.likePost = async (req,res)=> {
    try{
         // fetch data from request ki body 
    const {post , user } = req.body ;

    // creating new object of likes 
    const like = new Like ({
       post, user ,
    });

    //  saved in db

    const savedLike = await like.save();

    // update post collection

    const updatedPost= await Post.findByIdAndUpdate(post, {$push : {likes : savedLike._id}} , {new : true})
    .populate("likes") //populate the comment array with comment documents
    .exec();

    res.json({
        post : updatedPost,
    })
    }
    catch(error){
        return res.status(400).json({
            error : "Error while doing likes",
        });
    }

   
};

exports.unlikePost = async (req, res) => {
    try {
      const { post, like } = req.body;
  
      // find and delete the from like collection
      const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });
  
      // update the post collection
      const updatedPost = await Post.findByIdAndUpdate(
        post,
        { $pull: { likes: deletedLike._id } },
        { new: true }
      );
  
      res.json({
        post: updatedPost,
      });
    } catch (err) {
      return res.status(500).json({
        error: "Error While unLike Post",
      });
    }
  };