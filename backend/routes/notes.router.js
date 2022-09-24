const express = require("express");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const NotesModel = require("../models/notes.model");
const notesRoute = express.Router();



//logged in user

notesRoute.get("/", async(req,res)=>{
    // console.log(req.body.userId)
    let data = await NotesModel.find({userId:req.body.userId})
    res.send(data)
})

notesRoute.post("/addnotes", async(req,res)=>{
   let newNote = new NotesModel(req.body)
   await newNote.save();
   res.send("Notes addeed sucessfully")
})

notesRoute.patch("/edit/:notesid", async(req,res)=>{
    let data = await NotesModel.findOneAndUpdate({_id:req.params.notesid, userId:req.body.userId},{...req.body})
    res.send("updated Sucessfully")
})


notesRoute.delete("/delete/:notesid", async(req,res)=>{
    let data = await NotesModel.findOneAndDelete({_id:req.params.notesid, userId:req.body.userId})
    res.send("deleted Sucessfully")
})

module.exports=notesRoute

