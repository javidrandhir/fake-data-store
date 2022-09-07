import Product from '../../models/Product'
import initDB from '../../utils/initDB'

initDB()

const productsApi=async(req,res)=>{
      switch(req.method){
        case 'GET':
            await fetchProducts(req,res)
            case 'POST':
             await createProduct(req,res)
      }
}


const fetchProducts=async(req,res)=>{
     const limit=req.query.limit
     const sort=req.query.sort
    try{
        if(limit || sort){
            const products=await Product.find({}).limit(limit).sort({id:sort})
             res.status(200).json(products)
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
    const products=await Product.find({})
    const length1=products.length
    const newProduct=await Product({
        id:length1 + 1,
        name:'basket 2',
        description:'this is a best basket',
        image1:'https://www.bing.com/th?id=OIP.bFlrHMS6H29BYnOcuxP7xAHaHa&w=197&h=121&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2',
        image2:'https://www.bing.com/th?id=OIP.8-JX-Nx0ZDcoIjgQ4AvrmQHaHa&w=197&h=121&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2',
        image3:'https://www.bing.com/th?id=OIP.Jg4UYz5SEt6xwg96FjSBdQHaHa&w=197&h=121&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2',
        image4:'https://www.bing.com/th?id=OIP.Jg4UYz5SEt6xwg96FjSBdQHaHa&w=197&h=121&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2',
        price:150,
        category:'basket',
        rating:5,
        stock:15
    })
    res.status(200).json(newProduct,{message:'product created successfully'})
}


export default productsApi