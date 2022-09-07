import mongoose from "mongoose";


const albumSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    title:{type:String,required:true},
    url:{type:String,required:true}
},{timestamps:true})


export default mongoose.models.Album || mongoose.model("Album",albumSchema)