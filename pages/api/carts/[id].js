import Cart from '../../../models/Cart'
import initDB from '../../../utils/initDB'


initDB()

const cartApi=async(req,res)=>{
      switch(req.method){
        case 'GET':
            await fetchCart(req,res)
            case 'DELETE':
                await deleteCart(req,res)
                case 'PUT' :
                    await updatecart(req,res)
                  case 'PATCH' :
                    await patchcart(req,res)
      }
}

const deleteCart=async(req,res)=>{
    const {id}=req.query
    const exist=await Cart.findOne({id})
    if(exist){
        return res.status(200).json({message:`cart with id -${id} deleted successfully !`})
    }else{
        return res.status(400).json({message:'cart with this id does not exist..'})
    }
}
const updatecart=async(req,res)=>{
    const {id}=req.query
    const {userId,products}=req.body
    const exist=await Cart.findOne({id})
    if(exist){
        const updatedUser={
            id,
           userId,
           products
        }
        return res.status(201).json(updatedUser)
    }else{
        return res.status(400).json({message:"user witn this id doesn't exist !"})
    }
}
const patchcart=async(req,res)=>{
    const {id}=req.query
    const {products}=req.body
    const exist=await Cart.findOne({id})
    if(exist){
        const patched={
            id,
           userId:exist.userId,
           products:products ? products :exist.products
        }   
        return res.status(201).json(patched)
    }else{
        return res.status(400).json({message:"user witn this id doesn't exist !"})
    }
}


const fetchCart=async(req,res)=>{
    const {id}=req.query
    console.log(id)
    const exist=await Cart.findOne({id}).populate({path:"products.product"})
    return res.status(201).json(exist)
    // if(exist){
        
    // }else{
    //     return res.status(400).json({message:`cart with this id(${id}) not found`})
    //     console.log(err)
    // }
}


export default cartApi
