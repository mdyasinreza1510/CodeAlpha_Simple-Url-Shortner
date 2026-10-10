const urlModel = require('../models/url.model')
const { nanoid } = require("nanoid");//i ve installed this package for shortening the url 

async function crateshorturl(req, res) {

    try {
        const { originalurl } = req.body;
        const shorturl = nanoid(6);

        const url = await urlModel.create({
            originalurl,
            shorturl: `http://localhost:3000/${shorturl}`,
            data: url
        });
        res.status(201).json({
            messege: "short url created sucessfully"
        })
    }
 

}