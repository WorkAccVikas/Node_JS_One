const mongoose =require('mongoose');
const connectionString="mongodb+srv://workacc:workacc@cluster0.sajxl.mongodb.net/studentDB?authSource=admin&replicaSet=atlas-ktacp5-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true";

mongoose.connect(connectionString).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log('No Connection');
})
