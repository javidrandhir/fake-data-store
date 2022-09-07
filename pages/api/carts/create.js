import Cart from '../../../models/Cart'
import initDB from '../../../utils/initDB'


initDB()

const cart1Api=async(req,res)=>{
    switch(req.method){
        case 'POST':
            await createCart(req,res)
            break;
    }
}
const createCart=async(req,res)=>{
    const{ userId,products}=req.body;
    const totalcarts=Cart.find({})
    const exist=await Cart.findOne({id})
    if(exist){
        return res.status(400).json({message:'cart with this id already exists!'})
    }else{
        const created={
            id:totalcarts.length +2,
            userId,
            products
        }
        return res.status(201).json(created)
    }
  
}


export default cart1Api