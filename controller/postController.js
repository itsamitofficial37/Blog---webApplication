// import 

const Post = require("../models/postModel");

// business logic

exports.createPost = async(req,res)=> {
    try{
        // fetch data 
        const {title , body} = req.body;
        const post = new Post({
            title,body
        });

        // save in database 
        const savedPost = await post.save();
        
        res.json({
            post : savedPost,
        });

    }
    catch(error){
        return res.status(400).json({
            error : "Error while creating Post"
        });
    }
};

exports.getAllPost = async (req,res)=> {
    try{
        const allPosts = await Post.find().populate("comments").populate("likes").exec();

        res.json({
            allPosts,
        })
    }
    catch(error) {
        return res.status(400).json({
            errror : "Error while fetching Post",
        });
    }
    
}


