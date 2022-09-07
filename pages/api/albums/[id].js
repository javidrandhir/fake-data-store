import Album from '../../../models/Album'
import initDB from '../../../utils/initDB'

initDB()

const albumApi=async(req,res)=>{
    switch(req.method){
        case 'GET' :
            await fetchAlbum(req,res)
        case 'DELETE' :
            await deleteAlbum(req,res)
            case 'PUT' :
                await updateAlbum(req,res)
                case 'PATCH' :
                    await patchAlbum(req,res)
    }
}

const fetchAlbum=async(req,res)=>{
    const {id}=req.query
    const exist=await Album.findOne({id})
    if(exist){
       return res.status(200).json(exist)
    }else{
        return res.status(400).json({message:'album with that id does not exist'})
    }
}
const updateAlbum=async(req,res)=>{
    const {id}=req.query
    const {title,url}=req.body
    const exist=await Album.findOne({id})
    if(exist){
    if(!title || !url){
          return res.status(400).json({message:'please give all parameters to update..'})
    }
        const patched={
            id,
            title,
            url 
        }
       return res.status(200).json(patched)
    }else{
        return res.status(400).json({message:'album with that id does not exist'})
    }
}
const patchAlbum=async(req,res)=>{
    const {id}=req.query
    const {title,url}=req.body
    const exist=await Album.findOne({id})
    if(exist){
        const patched={
            id,
            title:title ? title : exist.title,
            url:url ? url : exist.url
        }
       return res.status(200).json(patched)
    }else{
        return res.status(400).json({message:'album with that id does not exist'})
    }
}

const deleteAlbum=async(req,res)=>{
    const {id}=req.query
    const exist=await Album.findOne({id})
    if(exist){
       return res.status(200).json({message:`album with id - ${id} deleted successfully .`})
    }else{
        return res.status(400).json({message:'album with that id does not exist'})
    }
}

export default albumApi