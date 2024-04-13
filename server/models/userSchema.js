const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

// userSchema.methods.generateAuthToken=function () {
//     const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7"})
//     return token 
// };

const users = new mongoose.model("users",userSchema);

// const validate = (data)=>{
//     const schema =  Joi.object({
//         name: Joi.string().required().label("name"),
//         email: Joi.string().email().required().label("email"),
//         password:passwordComplexity().required().label("password"),

//     });
//     return schema.validate(data)
// };


module.exports = users;