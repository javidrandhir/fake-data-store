import Photo from "../../../../models/Photo";
import Album from '../../../../models/Album'
import initDB from "../../../../utils/initDB";

initDB()


const alumPhotos=async(req,res)=>{
    switch(req.method){
        case 'GET' :
            await fetchPhots(req,res)
            break;
    }
}


const fetchPhots=async(req,res)=>{
    const {id}=req.query
    const albumEx=await Album.find({id})
    if(albumEx){
         const pics=await Photo.find({albumId:id})
         return res.status(200).json(pics)
    }else{
        return res.status(200).json({message:'album with this id not found'})
    }
}

export default alumPhotos