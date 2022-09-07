import mongoose from "mongoose";


const bookSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    author:{type:String,required:true},
    rating:{type:Number,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    image1:{type:String,required:true},
    description:{type:String,required:true},
    edition:{type:String,required:true},
    publisher:{type:String,required:true},
    publishedDate:{type:String,required:true},
    pages:{type:Number,required:true},
    type:{type:String,required:true},
    reviews:[
        {
            name1:{type:String,required:true},
            rating1:{type:Number,required:true},
            description1:{type:String,required:true}
        }
    ]
},{timestamps:true})


export default mongoose.models.Book || mongoose.model("Book",bookSchema)