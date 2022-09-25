const express = require("express");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const UserModel = require("../models/user.model");

const userRoute = express.Router();


userRoute.get("/", async (req,res)=>{
    let data = await UserModel.find()
    res.send(data)
})


userRoute.post("/signup", async(req,res)=>{
    let {email, password, age} = req.body;
    bcrypt.hash(password, 5, async function(err, hash) {
        if(err){
            res.json({"msg":"something went wrong"})
        }
        else{
            let newUser = new UserModel({email,password:hash,age})
            await newUser.save()
            res.json({"msg":"signnedup sucessfully"})
            
        }
    });
})


userRoute.post("/login", async (req,res)=>{
    let {email, password} = req.body;
    let user = await UserModel.findOne({email})
    bcrypt.compare(password, user.password, function(err, result) {
        if(result){
            var token = jwt.sign({ userId: user._id }, 'shhhhh');
            res.send({"msg":"Logged in sucessfully", "token":token, "userId":user._id})
        }
        else {
            res.send("login again")
        }
    });
})

module.exports = userRoute