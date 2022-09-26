const express = require("express");
const connection = require("./config/db");
const authenticationMidlleware = require("./midldlewares/authentication");
const notesRoute = require("./routes/notes.router");
const userRoute = require("./routes/user.routes");
require('dotenv').config()
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.use("/user", userRoute)
app.use(authenticationMidlleware)
app.use("/notes", notesRoute)



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