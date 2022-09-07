import Book from '../../../models/Book'
import initDB from '../../../utils/initDB'


initDB()

const booksApi=async(req,res)=>{
    switch(req.method){
        case 'GET':
            await fetchBooks(req,res)
        case 'POST':
            await createBook(req,res)
      
    }
}
const fetchBooks=async(req,res)=>{
    const limit=req.query.limit
    const sort=req.query.sort
    if(limit || sort){
        const fetched=await Book.find({}).limit(limit).sort({id:sort})
         res.status(200).json(fetched)
    }else{
        const fetchde=await Book.find({})
        res.status(200).json(fetchde)
    }
}


const createBook=async(req,res)=>{
    const {id,name,author,publisher,price,rating,image,image1,description,publishedDate,pages,type,reviews,edition}=req.body
    if(!id || !name || !author || !publisher || !image1 || !image || !rating || !description || !publishedDate || !pages || !type || !reviews || !edition){
        return res.status(400).json({message:'please provide all the parameters'})
    }
   try{
    const created=await Book.findOne({id})
    if(created){
       return res.status(400).json({message:'book with this id already exists'})
    }else{
        const booknew=await Book({
            id,
            name,
            author,
            price,
            rating,
            image,
            image1,
            description,
            edition,
            publisher,
            publishedDate,
            pages,
            type,
            reviews
        }).save()
        res.status(200).json(booknew)
    }
   }catch(err){
    return res.status(400).json({message:'error in creating book, please try after sometime !'})
   }
}



export default booksApi