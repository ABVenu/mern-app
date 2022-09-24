const express = require("express");
const connection = require("./config/db");
const authenticationMidlleware = require("./midldlewares/authentication");
const notesRoute = require("./routes/notes.router");
const userRoute = require("./routes/user.routes");
require('dotenv').config()
const app = express();
app.use(express.json());
const PORT = process.env.port || 8080;

app.use("/user", userRoute)
app.use(authenticationMidlleware)
app.use("/notes", notesRoute)

app.get("/",authenticationMidlleware,(req,res)=>{
    res.send("Hello")
})


app.listen(PORT, async()=>{
    try{
       await connection
       console.log("connected to db")
    }
    catch(err){
        console.log("error to connect to DB")
        console.log(err)

    }

    console.log(`listening to ${PORT}`)
})