const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");


// router.post("/signup",async(req,res)=>{
//     // console.log(req.body);
//     const {name,email,category,password} = req.body;

//     if(!name && !email && !category && !password){
//         res.status(422).send("plz fill the data");
//     }

// });

// router.get("/",async(req,res)=>{
//     try {
//         const userdata = await users.find();
//         res.status(201).json(userdata)
//         console.log(userdata);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// })

router.post("/Signup",(req,res)=>{
    console.log(req.body);
})

    module.exports = router; 