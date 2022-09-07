import Book from '../../../../models/Book'
import initDB from '../../../../utils/initDB'

initDB()
const typesApi=async(req,res)=>{
    switch(req.method){
      case 'GET':
          await fetchTypes(req,res);
          break;
    }
}


const fetchTypes=async(req,res)=>{
    const categories=await Book.find({}).distinct("type")
    return res.status(200).json(categories)
}

export default typesApi
