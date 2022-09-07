import User from '../../../models/User'
import initDB from '../../../utils/initDB'

initDB()

const userApi=async(req,res)=>{
      switch(req.method){
        case 'GET':
            await fetchuser(req,res)
        case 'DELETE' :
            await deleteuser(req,res)
            case 'PUT' :
              await updateUser(req,res)
            case 'PATCH' :
              await patchUser(req,res)
           
      }
}


const fetchuser=async(req,res)=>{
    const {id}=req.query
    const exist=await User.findOne({id})
    if(exist){
        return res.status(201).json(exist)
    }else{
        return res.status(400).json({message:"user witn this id doesn't exist !"})
    }
}
const deleteuser=async(req,res)=>{
    const {id}=req.query
    const exist=await User.findOne({id})
    if(exist){
        return res.status(201).json({message:`user with id - ${id} deleted...`})
    }else{
        return res.status(400).json({message:"user witn this id doesn't exist !"})
    }
}
const updateUser=async(req,res)=>{
    const {id}=req.query
    const {name,email,password,image}=req.body
    const exist=await User.findOne({id})
    if(exist){
        const updatedUser={
            id,
            name,
            email,
            password,
            image
        }
        return res.status(201).json(updatedUser)
    }else{
        return res.status(400).json({message:"user witn this id doesn't exist !"})
    }
}
const patchUser=async(req,res)=>{
    const {id}=req.query
    const {name,email,password,image}=req.body
    const exist=await User.findOne({id})
    if(exist){
        const patched={
            id,
            name:name ? name :exist.name,
            email:email ? email :exist.email,
            password:password ? password : exist.password,
            image:image? image : exist.image
        }   
        return res.status(201).json(patched)
    }else{
        return res.status(400).json({message:"user witn this id doesn't exist !"})
    }
}


export default userApi
