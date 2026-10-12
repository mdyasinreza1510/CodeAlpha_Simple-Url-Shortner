const urlModel = require('../models/url.model')
const { nanoid } = require("nanoid");//i ve installed this package for shortening the url 

async function crateshorturl(req, res) {

    try {
        const { originalurl } = req.body;
        const shorturl = nanoid(6);

        const url = await urlModel.create({
            originalurl,
            shorturl
   
        });
        res.status(201).json({
            messege: "short url created sucessfully",
            shorturl:`http://localhost:3000/${shorturl}`
        
        })
    } catch (err){
        console.log(err);

        res.status(500).json({
            messege:err.messege,
        })
    }
 

}


async function getshorturl(req,res){

    try{

           const {shorturl}= req.params;
    const url= await urlModel.findOne({
        shorturl:shorturl,
    })

    if(!url){
        return res.status(404).json({
            messege:"URL NOT FOUND"
        })
    }
    return res.redirect(url.originalurl) 
    
}catch(err){
     return res.status(500).json({
      message: err.message,
    });
}

}

module.exports={crateshorturl, getshorturl}