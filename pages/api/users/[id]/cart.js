import Cart from "../../../../models/Cart";
import User from '../../../../models/User'
import initDB from "../../../../utils/initDB";

initDB()


const alumPhotos=async(req,res)=>{
    switch(req.method){
        case 'GET' :
            await fetchuserCart(req,res)
            break;
    }
}


const fetchuserCart=async(req,res)=>{
    const {id}=req.query
    const albumEx=await User.findOne({id})
    if(albumEx){
         const carts=await Cart.findOne({id}).populate({path :'products.product'})
         return res.status(200).json(carts)
    }else{
        return res.status(200).json({message:'user with this id not found'})
    }
}

export default alumPhotos