const express=require('express')
const urlcontroller=require("../controllers/url.controller")





const router=express.Router();

router.post("/uploadUrl",urlcontroller.crateshorturl)

router.get("/:shorturl",urlcontroller.getshorturl)


//diect route:- http://localhost:3000/api/url/{shorturl }

module.exports=router;