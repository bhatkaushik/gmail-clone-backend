import mongoose from "mongoose";

// schema design
const userSchema = new mongoose.Schema({
name:{
    type:String,
    reqired:[true,'name is required']
},
email:{
    type:String,
    reqired:[true,'email is required should be unique '],
    unique:true,
},
password:{
    type:String,
    reqired:[true,'password is required']
},

},{timestamps:true}
);

// export
const userModel = mongoose.model('users', userSchema)
export default userModel