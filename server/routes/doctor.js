//jshint esversion:6
const express = require("express"); 
const router = express.Router();
const mongoose = require('mongoose');
const requireLoginDoc = require("../middleware/requireLoginDoctor");
const requireLogin = require("../middleware/requireLogin");

const Doctor = mongoose.model("Doctor");
const User = mongoose.model("User");


/// user follow the doctor
router.put('/follow',requireLogin,(req,res)=>{
    Doctor.findByIdAndUpdate(req.body.followId,{
        $push:{followers:req.user._id}
    },{
        new:true
    },(err,result1)=>{
        if(err){
            return res.status(422).json({error:err})
        }
      User.findByIdAndUpdate(req.user._id,{
          $push:{following:req.body.followId}
          
      },{new:true}).select("-password").then(result2=>{
          res.json({result1,result2})
      }).catch(err=>{
          return res.status(422).json({error:err})
      })

    }
    )
})
/// doctor profile when user click on doctor information
router.get('/doctorprofile/:id',requireLoginDoc,(req,res)=>{      // here we get the "id" of the user along with url , whose profile we want to see
    Doctor.findOne({_id:req.params.id})                   // query to find the user using "id" in "User" db
    .select("-password")                                   // select all the field except password
    .then(doctor=>{
          res.json(doctor)
         
    }).catch(err=>{
        return res.status(404).json({error:"User not found"})
    })
})

// updating doc pic
router.put('/doc/updatepic',requireLoginDoc,(req,res)=>{
    Doctor.findByIdAndUpdate(req.user._id,{$set:{pic:req.body.pic}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic cannot post"})
         }
         res.json(result)
    })
})
router.put('/rating',requireLogin,(req,res)=>{
    Doctor.findByIdAndUpdate(req.body.docid,{$set:{rating:req.body.rate,ratingNo:req.body.n}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic cannot post"})
         }
         res.json(result)
    })
})
module.exports=router; 