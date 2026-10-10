const mongoose=require('mongoose');




async function connectdb(){

    await mongoose.connect(process.env.MONGO_URI);
    console.log("DATABSE CONNECTED");
}

module.exports=connectdb;