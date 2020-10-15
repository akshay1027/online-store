import mongoose from 'mongoose'

//1JzU7R1DBk3LQoTC
function initDB(){
    if(mongoose.connections[0].readyState){
        console.log("already connected to mongo")
        return 
    }
    
   mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
   })
   mongoose.connection.on('connected',()=>{
       console.log("connected to mongo")
   })
   mongoose.connection.on('error',(err)=>{
    console.log("error connecting with mongo", err)
})
}

export default initDB