import Product from '../../../../models/Product'
import initDB from '../../../../utils/initDB'

initDB()
const categoryApi=async(req,res)=>{
    switch(req.method){
      case 'GET':
          await fetchcategories(req,res)
    }
}


const fetchcategories=async(req,res)=>{
    const {category}=req.query
    const limit=req.query.limit
    const sort=req.query.sort
    
    if(limit || sort){
        const categories=await Product.find({category}).limit(limit).sort({id:sort})
      return  res.status(200).json(categories)
    }
    const categories=await Product.find({category})
   return res.status(200).json(categories)
}

export default categoryApi
