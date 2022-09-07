import Cart from '../../../models/Cart'
import initDB from '../../../utils/initDB'


initDB()

const cartsApi=async(req,res)=>{
    switch(req.method){
        case 'GET':
            await fetchCarts(req,res)
        case 'POST':
            await createCart(req,res)
      
    }
}
const fetchCarts=async(req,res)=>{
    const limit=req.query.limit
    const sort=req.query.sort
    if(limit || sort){
        const fetched=await Cart.find({}).limit(limit).sort({id:sort}).populate({path :'products.product'})
         res.status(200).json(fetched)
    }else{
        const fetchde=await Cart.find({}).populate({path :'products.product'})
        res.status(200).json(fetchde)
    }
}


const createCart=async(req,res)=>{
    const {id}=req.body
   try{
    const created=await Cart.findOne({id})
    if(created){
       return res.status(400).json({message:'cart with this id already exists'})
    }else{
        const cartnew=await Cart({
            id:2,
            userId:2,
            products:[
                {product:'63109b6175837e79bfc0cfb2',quantity:2}
            ]
        }).save()
        res.status(200).json(cartnew)
    }
   }catch(err){
    return res.status(400).json({message:'error in creating cart, please try after sometime !'})
   }
}



export default cartsApi