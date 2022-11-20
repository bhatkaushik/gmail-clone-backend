import mongoose from "mongoose";

const emailDataSchema = mongoose.Schema({
    To:String,
    Subject: String,
    Message: String
})


const Emaildata= mongoose.model('emaildata',emailDataSchema);

export default Emaildata
