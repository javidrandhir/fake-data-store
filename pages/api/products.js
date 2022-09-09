import Product from '../../models/Product'
import initDB from '../../utils/initDB'

initDB()

const productsApi=async(req,res)=>{
      switch(req.method){
        case 'GET':
            await fetchProducts(req,res)
            break;
            case 'POST':
             await createProduct(req,res)
             break;
      }
}


const fetchProducts=async(req,res)=>{
     const limit=req.query.limit
     const sort=req.query.sort
    try{
        if(limit || sort){
            const products=await Product.find({}).limit(limit).sort({id:sort})
            return res.status(200).json(products)
        }
        else{
            const products=await Product.find({})
           return  res.status(200).json(products)
        }
    }catch(err){
        return res.status(400).json({message:'error while fetching !'})
    }
}
const createProduct=async(req,res)=>{
    // shirts
    // mobiles
    // watches
    // dress
    // jacket
    // earphones
    const products=await Product.find({})
    const length1=products.length
    const newProduct=await Product({
        id:10,
        name:"Vibez by Lifelong VBSWM360 Urbane Smartwatch with 3D UI 1.32 inch HD Display|24x7 Heart Rate & Blood Oxygen Tracking|8 Sports Mode|Sleep Monitor|IP67 Waterproof",
        description:'The Vibez by Lifelong smartwatches feature a slim and lightweight design. The watch is loaded with amazing features and is extremely easy to operate. You can receive all important notifications, from calls & texts to social media & sedentary alerts, all in one place. Vibez watches are super handy, stylish and sleek. No matter where you go, Vibez is right there with you!',
        image1:'https://res.cloudinary.com/randhircloud/image/upload/v1662706591/71TAPhyZlEL._SX522__balc3n.jpg',
        image2:'https://res.cloudinary.com/randhircloud/image/upload/v1662706651/71E-cHosYvL._SX522__i93tbu.jpg',
        image3:'https://res.cloudinary.com/randhircloud/image/upload/v1662706720/71I6gQirttL._SX522__aplbya.jpg',
        image4:'https://res.cloudinary.com/randhircloud/image/upload/v1662706862/71todhYiaUL._SX522__dgxg3e.jpg',
        price:3499,
        category:'watches',
        rating:5,
        stock:17
    })
   return res.status(200).json(newProduct,{message:'product created successfully'})
}


export default productsApi