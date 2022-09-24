const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    heading:{type: String, required:true},
    notes:{type:String, required:true},
    tag:{type:String, required:true},
    userId:{type:String, required:true}
})


const NotesModel = mongoose.model("note", notesSchema)

module.exports= NotesModel