import Photo from '../../../models/Photo'
import initDB from '../../../utils/initDB'

initDB()

const photosApi=async(req,res)=>{
    switch(req.method){
        case 'GET':
            await fetchphotos(req,res)
        case 'POST':
            await createPhoto(req,res)
    }
}
const createPhoto=async(req,res)=>{
   try{
    const created=await Photo({
        id:3,
        albumId:3,
        title:"jacket",
        url:'https://res.cloudinary.com/randhircloud/image/upload/v1662381593/photo-1548126032-079a0fb0099d_bkqrdw.jpg'
    }).save()
   return  res.status(200).json(created)
   }catch(err){
    return res.status(400).json({message:'error while creating !'})
   }
}

const fetchphotos=async(req,res)=>{
    const limit =req.query.limit
    const sort =req.query.sort
    try{
        if(limit || sort){
            const photosData=await Photo.find({}).limit(limit).sort({id:sort})
            return res.status(200).json(photosData)
        }
          const photosData=await Photo.find({})
          return res.status(200).json(photosData)
    }catch(err){
        return res.status(400).json({message:'error while fetching albums'})
    }
}

export default photosApi