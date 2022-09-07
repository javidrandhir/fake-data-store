import mongoose from 'mongoose'



const cartSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    userId:{type:Number,required:true},
    products:[
        {product:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},quantity:{type:Number,default:1}}
    ]
})


export default mongoose.models.Cart || mongoose.model('Cart',cartSchema)