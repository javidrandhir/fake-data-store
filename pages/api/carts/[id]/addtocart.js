import initDB from "../../../../utils/initDB";
initDB();
import Cart from "../../../../models/Cart";
import Product from "../../../../models/Product";


const addToCart=async(req,res)=>{
    switch(req.method){
        case 'POST' :
            await addTocarthandler(req,res)
            break;
    }
}

const addTocarthandler=async(req,res)=>{
    const {id}=req.query
    const {productId,quantity}=req.body
    if(!productId || !quantity){
        return res.status(400).json({message:'please provide the required parameters.'})
    }
    const cart=await Cart.findOne({id})
    if(!cart){
        return res.status(400).json({message:'cart with this id not exist'})
    }
    const existItem=await cart.products.find(pdoc=> productId === pdoc.product.toString())
    if(existItem){
        const updatedProducts=cart.products.map(item=> item.product.toString() === productId ? {product:productId,quantity:existItem.quantity + quantity,_id:existItem._id} : item)
        const updated={
            _id:cart._id,
           userId:cart.userId,
           products:[...updatedProducts]
        }
        return res.status(200).json(updated)
    }else{
        const updatedProducts=[...cart.products,{products:productId,quantity:quantity}]
        const updated={
            _id:cart._id,
           userId:cart.userId,
           products:[...updatedProducts]
        }
        return res.status(200).json(updated)
    }
}


export default addToCart