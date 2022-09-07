import mongoose from "mongoose";


const photoSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    albumId:{type:Number,required:true},
    title:{type:String,required:true},
    url:{type:String,required:true}
},{timestamps:true})


export default mongoose.models.Photo || mongoose.model("Photo",photoSchema)