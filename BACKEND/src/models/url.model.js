const mongoose= require('mongoose');

const urlschema= new mongoose.Schema({
    originalurl:{
        type:String,
        required:true
    },
    shorturl:{
        type:String,
        required:true,
        unique:true
    }
})

const urlModel=mongoose.model("url",urlschema);
module.exports= urlModel;
