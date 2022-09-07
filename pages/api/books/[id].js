import Book from '../../../models/Book'
import initDB from '../../../utils/initDB'

initDB()

const albumApi=async(req,res)=>{
    switch(req.method){
        case 'GET' :
            await fetchBook(req,res)
        case 'DELETE' :
            await deleteBook(req,res)
            case 'PUT' :
                await updateBook(req,res)
                case 'PATCH' :
                    await patchBook(req,res)
    }
}

const fetchBook=async(req,res)=>{
    const {id}=req.query
    const exist=await Book.findOne({id})
    if(exist){
       return res.status(200).json(exist)
    }else{
        return res.status(400).json({message:'book with that id does not exist'})
    }
}
const updateBook=async(req,res)=>{
    const {id}=req.query
    const {name,author,rating,price,image,image1,description,edition,publisher,publishedDate,pages,type,reviews}=req.body
    if(!id || !name || !author || !publisher || !image1 || !image || !rating || !description || !publishedDate || !pages || !type || !reviews || !edition){
        return res.status(400).json({message:'please provide all the parameters'})
    }
    const exist=await Book.findOne({id})
    if(exist){
        const patched={
            id,
            name,
            author,
            price,
            image,
            image1,
            description,
            edition,
            publisher,
            publishedDate,
            pages,
            type,reviews
        }
       return res.status(200).json(patched)
    }else{
        return res.status(400).json({message:'book with that id does not exist'})
    }
}
const patchBook=async(req,res)=>{
    const {id}=req.query
    const {name,author,rating,price,image,image1,description,edition,publisher,publishedDate,pages,type,reviews}=req.body
    const exist=await Book.findOne({id})
    if(exist){
        const patched={
            id,
            name:name ? name : exist.name,
            author:author ? author : exist.author,
            rating:rating ? rating : exist.rating,
            price:price ? price : exist.price,
            image:image ? image : exist.image,
            image1:image1 ? image1 : exist.image1,
            description:description ? description : exist.description,
            edition:edition ? edition : exist.edition,
            publisher:publisher ? publisher : exist.publisher,
            publishedDate:publishedDate ? publishedDate : exist.publishedDate,
            pages:pages ? pages : exist.pages,
            type:type ? type : exist.type,
            reviews:reviews ? reviews : exist.reviews,
        }
       return res.status(200).json(patched)
    }else{
        return res.status(400).json({message:'album with that id does not exist'})
    }
}

const deleteBook=async(req,res)=>{
    const {id}=req.query
    const exist=await Book.findOne({id})
    if(exist){
       return res.status(200).json({message:`book with id - ${id} deleted successfully .`})
    }else{
        return res.status(400).json({message:'book with that id does not exist'})
    }
}

export default albumApi