//jshint esversion:6

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const Doctor = mongoose.model("Doctor");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../keys");
const requireLogin = require('../middleware/requireLogin');
const requireLoginDoctor = require('../middleware/requireLoginDoctor');


//User Signup Route
router.post("/signup", (req, res) => {
    const { name, email, password,pic } = req.body;
    if (!email || !password || !name) {
        res.status(422).json({ error: "please add all the fields" });
    }
    User.findOne({ email: email })
        .then((saveduser) => {
            if (saveduser) {
                return res.status(422).json({ error: "user is already exist with the email" });
            }

            bcrypt.hash(password, 12)  //for hashing the password(password will not shows now on database)
            .then(hashedpassword => {

                const user = new User({
                    email,
                    password:hashedpassword,
                    name,
                    pic
                });

                user.save() 
                .then(user => {
                    res.json({ message: "saved Sucessfully" });
                })
                .catch(err => {
                    console.log(err);
                });

            });

        });

});

//User login route
router.post("/login",(req,res)=>{

    const {email,password}=req.body;
    if(!email || !password)
    {
       return  res.status(422).json({error : "please add email and password"});
    }

    User.findOne({email:email})
    .then(saveduser=>{
        if(!saveduser)
        {
             return res.status(401).json({error : "Invalid email or password"});
        }
        bcrypt.compare(password,saveduser.password)
        .then(doMatch=>{
            if(doMatch)
            {
                // res.json("Sucessfully signed in");
                const token=jwt.sign({_id:saveduser._id},JWT_SECRET); //saving user id to _id & create token using jwt
                const {_id,usertype,name,email,followers,following,pic} = saveduser
                res.json({token,user:{_id,usertype,name,email,followers,following,pic}});    //sending token 
            }
            else
            {
                return res.status(422).json({error : "Invalid email or password"});
            }
        })
        .catch(err=>{
            console.log(err);
        });
    });

});

//Doctor Signup
router.post("/signupDoc", (req, res) => {
    const { name, email, password,pic,licId,body,type } = req.body;
    if (!email || !password || !name||!licId||!type||!body) {
        res.status(422).json({ error: "please add all the fields" });
    }
    Doctor.findOne({ email: email })
        .then((savedDoctor) => {
            if (savedDoctor) {
                return res.status(422).json({ error: "user is already exist with the email" });
            }

            bcrypt.hash(password, 12)  //for hashing the password(password will not shows now on database)
            .then(hashedpassword => {

                const doctor = new Doctor({
                    licId,
                    name,
                    email,
                    password:hashedpassword,
                    body,
                    specialization :type,
                    pic
                });

                doctor.save() 
                .then(doctor => {
                    res.json({ message: "saved Sucessfully" });
                })
                .catch(err => {
                    console.log(err);
                });

            });

        });

});

//Doctor login
router.post("/loginDoc",(req,res)=>{

    const {email,password}=req.body;
    if(!email || !password)
    {
       return  res.status(422).json({error : "please add email and password"});
    }

    Doctor.findOne({email:email})
    .then(savedDoctor=>{
        if(!savedDoctor)
        {
             return res.status(401).json({error : "Invalid email or password"});
        }
        bcrypt.compare(password,savedDoctor.password)
        .then(doMatch=>{
            if(doMatch)
            {
                // res.json("Sucessfully signed in");
                const token=jwt.sign({_id:savedDoctor._id},JWT_SECRET); //saving user id to _id 
                const {_id,licId,name,usertype,email,body,specialization,rating ,followers, prevPatients,pic} = savedDoctor
                res.json({token,user:{_id,licId,name,usertype,email,body,specialization,rating,followers, prevPatients,pic}});
            }
            else
            {
                return res.status(422).json({error : "Invalid email or password"});
            }
        })
        .catch(err=>{
            console.log(err);
        });
    });

});











module.exports = router;

