import Album from '../../../models/Album'
import initDB from '../../../utils/initDB'

initDB()

const ablumsApi=async(req,res)=>{
    switch(req.method){
        case 'GET':
            await fetchAlbums(req,res)
        case 'POST':
            await createAlbum(req,res)
    }
}
const createAlbum=async(req,res)=>{
   try{
    const created=await Album({
        id:4,
        title:"technology",
        url:'https://res.cloudinary.com/randhircloud/image/upload/v1662379677/photo-1544441893-675973e31985_xwdfhh.jpg'
    }).save()
    res.status(200).json(created)
   }catch(err){
    return res.status(400).json({message:'error while creating !'})
   }
}

const fetchAlbums=async(req,res)=>{
    const limit =req.query.limit
    const sort =req.query.sort
    try{
        if(limit || sort){
            const albumsData=await Album.find({}).limit(limit).sort({id:sort})
            return res.status(200).json(albumsData)
        }
          const albumsData=await Album.find({})
          return res.status(200).json(albumsData)
    }catch(err){
        return res.status(400).json({message:'error while fetching albums'})
    }
}

export default ablumsApi