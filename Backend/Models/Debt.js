import mongoose from "mongoose";

const debtSchema= new mongoose.Schema({
    Name:String,
    Amount:Number,
    Type:String,
    Date: {type:Date, default:Date.now},
    isSettled:{type:Boolean, default:false}
})

export default mongoose.model('debt', debtSchema)