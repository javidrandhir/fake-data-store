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
    // computers
    // dress
    // tshirts
    // jacket
    // earphones
    const {id}=req.body
    const products=await Product.findOne({id})
        if(products){
             return res.status(400).json({message:'already a product exist with this id.'})
        }
    const newProduct=await Product({
        id:40,
        name:"iQOO Z6 44W (Raven Black, 6GB RAM, 128GB Storage)",
        description:"Z6 is equipped with a FHD+ AMOLED dispaly to give a truly immersive display experience with true color contrast. The display provides a 180Hz Touch Sampling Rate in the gaming sessions for an enhanced touch response.50MP AI rear camera comes with a variety of smart AI camera features and effects to capture wonderful moments with ease.",
        image1:'https://res.cloudinary.com/randhircloud/image/upload/v1662804481/61ST4CMWEKL._SX569__ey0l04.jpg',
        image2:'https://res.cloudinary.com/randhircloud/image/upload/v1662804520/51Tfpuj315L._SY741__tz8c3i.jpg',
        image3:'https://res.cloudinary.com/randhircloud/image/upload/v1662804558/41t35bCleTL._SY741__qamfjh.jpg',
        image4:'https://res.cloudinary.com/randhircloud/image/upload/v1662804623/415a8wx0ATL._SX679__orftfd.jpg',
        price:19998,
        category:'mobiles',
        rating:5,
        stock:15
    }).save()
   return res.status(200).json(newProduct,{message:'product created successfully'})
}


export default productsApi