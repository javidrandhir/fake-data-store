import Product from '../../../models/Product'
import initDB from '../../../utils/initDB'

initDB()

const productApi=async(req,res)=>{
      switch(req.method){
        case 'GET':
            await fetchProduct(req,res)
            break;
        case 'DELETE' :
            await deleteProduct(req,res)
            break;
            case 'PUT' :
              await updateProduct(req,res)
              break;
            case 'PATCH' :
              await patchProduct(req,res)
              break;
           
      }
}


const fetchProduct=async(req,res)=>{
    const {id}=req.query
   const reqProduct=await Product.findOne({id})
   if(reqProduct){
     return res.status(200).json(reqProduct)
   }else{
    return res.status(400).json({message:'product with this id not found!'})
   }
}

const deleteProduct=async(req,res)=>{
    const {id}=req.query
   const reqProduct=await Product.findOne({id})
   if(reqProduct){
     return res.status(200).json({message:`product with id ${id} deleted successfully`})
   }else{
     return res.status(400).json({message:`product with  ${id} does noe exist`})
   }
}
const updateProduct=async(req,res)=>{
  const {id}=req.query
  const {name,description,image1,image2,image3,image4,price,category,rating,stock,model}=req.body
  const reqProduct={
    id,
    name,
    description,
    image1,
    image2,
    image3,
    image4,
    price,
    category,
    rating,
    stock,
    model
  }
 return res.status(200).json(reqProduct)
}
const patchProduct=async(req,res)=>{
  const {id}=req.query
  const reqProduct=await Product.findOne({id})
  const patched={
    id,
    name:req.body.name ? req.body.name : reqProduct.name,
    description : req.body.description ? req.body.description : reqProduct.description,
    image1:req.body.image1 ? req.body.image1 :reqProduct.image1,
    image1:req.body.image2 ? req.body.image2 :reqProduct.image2,
    image1:req.body.image3 ? req.body.image3 :reqProduct.image3,
    image1:req.body.image4 ? req.body.image4 :reqProduct.image4,
    price:req.body.price ? req.body.price :reqProduct.price,
    category:req.body.category ? req.body.category :reqProduct.category,
    rating:req.body.rating ? req.body.rating :reqProduct.rating,
    stock:req.body.stock ? req.body.stock :reqProduct.stock,
    model:req.body.model ? req.body.model :reqProduct.model
  }
 return  res.status(200).json(patched)
}


export default productApi