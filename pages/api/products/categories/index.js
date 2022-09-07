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
    const categories=await Product.find({}).distinct("category")
    res.status(200).json(categories)
}

export default categoryApi