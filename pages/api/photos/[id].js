import Photo from '../../../models/Photo'
import initDB from '../../../utils/initDB'

initDB()

const albumApi=async(req,res)=>{
    switch(req.method){
        case 'GET' :
            await fetchPhoto(req,res)
        case 'DELETE' :
            await deletePhoto(req,res)
            case 'PUT' :
                await updatePhoto(req,res)
                case 'PATCH' :
                    await patchPhoto(req,res)
    }
}

const fetchPhoto=async(req,res)=>{
    const {id}=req.query
    const exist=await Photo.findOne({id})
    if(exist){
       return res.status(200).json(exist)
    }else{
        return res.status(400).json({message:'photo with that id does not exist'})
    }
}
const updatePhoto=async(req,res)=>{
    const {id}=req.query
    const {albumId,title,url}=req.body
    const exist=await Photo.findOne({id})
    if(exist){
    if(!albumId || !title || !url){
          return res.status(400).json({message:'please give all parameters to update..'})
    }
        const patched={
            id,
            albumId,
            title,
            url 
        }
       return res.status(200).json(patched)
    }else{
        return res.status(400).json({message:'photo with that id does not exist'})
    }
}
const patchPhoto=async(req,res)=>{
    const {id}=req.query
    const {albumId,title,url}=req.body
    const exist=await Photo.findOne({id})
    if(exist){
        const patched={
            id,
            albumId:albumId ? albumId : exist.albumId,
            title:title ? title : exist.title,
            url:url ? url : exist.url
        }
       return res.status(200).json(patched)
    }else{
        return res.status(400).json({message:'photo with that id does not exist'})
    }
}

const deletePhoto=async(req,res)=>{
    const {id}=req.query
    const exist=await Photo.findOne({id})
    if(exist){
       return res.status(200).json({message:`photo with id - ${id} deleted successfully .`})
    }else{
        return res.status(400).json({message:'photo with that id does not exist'})
    }
}

export default albumApi