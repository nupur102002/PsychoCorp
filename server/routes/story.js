const express = require("express"); 
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin=require("../middleware/requireLogin");
const Story=mongoose.model("Story");

//Create new story 
router.post("/createstory",requireLogin,(req,res)=>{
    const {title,body,pic,type}=req.body;
    if(!title || !body || !pic || !type )
    {
        return res.status(422).json({error :"Please add all the fields"});
    }
      req.user.password=undefined    // to remove the password from post
     
    const story=new Story({
        title,
        body,
        photo:pic,
        category:type,
        postedBy:req.user
    })

    story.save().then(result=>{
        res.json({story:result})
    })
    .catch(err=>{
        console.log(err)
    });
   
});

//for all stoies
router.get("/allstory",requireLogin,(req,res)=>{
    Story.find()                         //finding all posts  without any condition
    .populate("postedBy","_id name")
    .populate("comments.postedBy","_id name")  //   showing _id and name in postedBy
    .sort('-createdAt')
    .then(stories=>{
        res.json({stories:stories})   
    })
    .catch(err=>{
        console.log(err)
    })
})
//  my uploaded stories
router.get("/mystory",requireLogin,(req,res)=>{  
    Story.find({postedBy: req.user._id})  
    .populate("postedBy","_id name")  //it will expand only _id and name
    .then(mystory=>{
        res.json({mystory})
    })
    .catch(err=>{
        console.log(err)
    })
})

//like a story
router.put('/like',requireLogin,(req,res)=>{
    Story.findByIdAndUpdate(req.body.postId,{
      $push:{likes:req.user._id}
    },{
      new :true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
    })
})

//Unlike a story
router.put('/unlike',requireLogin,(req,res)=>{
    Story.findByIdAndUpdate(req.body.postId,{
      $pull:{likes:req.user._id}
    },{
      new :true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
          res.json(result)
      }
    })
})
module.exports=router;