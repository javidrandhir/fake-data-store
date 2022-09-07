import mongoose from 'mongoose'

const initDB=()=>{

    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
        console.log('mongoose connected')
    })
}


export default initDB;