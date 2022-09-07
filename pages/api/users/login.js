import User from '../../../models/User'
import initDB from '../../../utils/initDB'
import jwt from 'jsonwebtoken'  

initDB();

const loginApi=async(req,res)=>{
    switch(req.method){
        case 'POST':
            await loginUser(req,res);
            break;
    }
}

const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    if( !password || !email){
        return res.status(200).json({error:"please fill all the fields"})
    }
    const user=await User.findOne({email})
    if(!user){
       return res.status(200).json({error:'user with this email not exists'})
    }
    try{

         if(password.trim() !== user.password ){
            return res.status(400).json({error:'entered email or password does not match'})
         }else{
            const token=  jwt.sign({userId:user._id},'sertcvybuh9jnoibuhvgfcdxtygfhcv',{expiresIn:'7d'})
            const {name,email,isAdmin,image}=user;
           return res.status(200).json({token,user:{name,email,isAdmin,image}})

         }
    }catch(err){
        console.log(err)
    }
}


export default loginApi