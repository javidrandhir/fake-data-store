import Book from '../../../../models/Book'
import initDB from '../../../../utils/initDB'

initDB()
const typeApi=async(req,res)=>{
    switch(req.method){
      case 'GET':
          await fetchTypeBooks(req,res)
    }
}


const fetchTypeBooks=async(req,res)=>{
    const {type}=req.query
    const limit=req.query.limit
    const sort=req.query.sort
    
    if(limit || sort){
        const categories=await Book.find({type}).limit(limit).sort({id:sort})
       return res.status(200).json(categories)
    }
    const categories=await Book.find({type})
   return res.status(200).json(categories)
}

export default typeApi
