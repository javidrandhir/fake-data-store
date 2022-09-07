import mongoose from 'mongoose'


const productSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true},
    image1:{type:String,required:true},
    image2:{type:String},
    image3:{type:String},
    image4:{type:String},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    rating:{type:Number,required:true},
    stock:{type:Number,required:true},
    model:{type:String,default:'SC01/SC03_SML'},
},{
    timestamps:true
})

export default mongoose.models.Product || mongoose.model("Product",productSchema)

