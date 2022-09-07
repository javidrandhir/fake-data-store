import User from '../../../models/User'
import Cart from '../../../models/Cart'

import initDB from '../../../utils/initDB'

initDB()

const usersApi=async(req,res)=>{
      switch(req.method){
        case 'GET':
            await fetchUsers(req,res)
            case 'POST':
             await createUser(req,res)
      }
}


const fetchUsers=async(req,res)=>{
     const limit=req.query.limit
     const sort=req.query.sort
     if(limit || sort){
        const fetchedUsers=await User.find({}).limit(limit).sort({id:sort})
        return res.status(201).json(fetchedUsers)
     }else{
        const fetched=await User.find({})
        return res.status(201).json(fetched)
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
                {product:'63109b6175837e79bfc0cfb2',quantity:1},
                {product:'63119b86bed6c1a01d185e5e',quantity:2}
            ]
        }).save()
        res.status(200).json(newUser)

    }
}


export default usersApi