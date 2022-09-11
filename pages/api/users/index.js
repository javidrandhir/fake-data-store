import User from '../../../models/User'
import Cart from '../../../models/Cart'

import initDB from '../../../utils/initDB'

initDB()

const usersApi=async(req,res)=>{
      switch(req.method){
        case 'GET':
            await fetchUsers(req,res)
            break;
            case 'POST':
             await createUser(req,res)
             break;
      }
}


const fetchUsers=async(req,res)=>{
     const limit=req.query.limit
     const sort=req.query.sort
     if(limit || sort){
        const fetchedUsers=await User.find({}).limit(limit).sort({id:sort})
         res.status(201).json(fetchedUsers);
         return;
     }else{

         const fetched=await User.find({})
         res.status(201).json(fetched)
         return;
        }
     
   
}
const createUser=async(req,res)=>{
    const {email,name,id,password,image}=req.body
    const exist=await User.findOne({email})
    if(exist){
        return res.status(400).json({message:'user with this email already exists'})
    }else{
        const newUser=await User({
            id,
            name,
            email,
            password,
            image
        }).save()
        await new Cart({
            id:1,
            userId:1,
            products:[
                {product:'631ad8a3209a6eaafdbaaa0f',quantity:1},
                {product:'631ad9b4209a6eaafdbaaa12',quantity:2}
            ]
        }).save()
       return res.status(200).json(newUser)
    }
}


export default usersApi