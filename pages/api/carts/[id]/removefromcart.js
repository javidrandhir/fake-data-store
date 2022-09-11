import initDB from "../../../../utils/initDB";
initDB();
import Cart from "../../../../models/Cart";
import Product from "../../../../models/Product";


const RemoveFromCart=async(req,res)=>{
    switch(req.method){
        case 'POST' :
            await removefromcarthandler(req,res)
            break;
    }
}

const removefromcarthandler=async(req,res)=>{
    const {id}=req.query
    const {productId}=req.body
    if(!productId){
        return res.status(400).json({message:'please provide the required parameters.'})
    }
    const cart=await Cart.findOne({id})
    if(!cart){
        return res.status(400).json({message:'cart with this id not exist'})
    }
    const existItem=await cart.products.find(pdoc=> productId === pdoc.product.toString())
    console.log(existItem)
    if(existItem){
        if(existItem.quantity > 1){
            const updatedProducts=cart.products.map(item=> item.product.toString() === productId ? {product:productId,quantity:existItem.quantity - 1,_id:existItem._id} : item)
            const updated={
                _id:cart._id,
               userId:cart.userId,
               products:[...updatedProducts]
            }
            return res.status(200).json(updated)
        }else{
            const updatedCart=cart.products.filter(item=>item.product.toString() !== productId)
            const updated={
                _id:cart._id,
                userId:cart.userId,
                products:[...updatedCart]
            }
            return res.status(200).json(updated)
        }
    }else{
        return res.status(200).json({message:'product with this id not exist in cart'})
    }
}


export default RemoveFromCart