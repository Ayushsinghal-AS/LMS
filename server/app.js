require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = 8003;

app.use(cors());
app.use(express.json());


 app.use(router);



 const DB = 'mongodb+srv://ayush:ayush123@cluster0.bmfjpil.mongodb.net/mernstack?retryWrites=true&w=majority';


 mongoose.connect(DB, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   }).then(()=>{
       console.log("DB Connected")
   }).catch((error)=>{
    console.log("There is an error",error);
       console.log(error.message);
   });


 
app.listen(port,()=>{
    console.log(`server is start port number ${port}`);
});