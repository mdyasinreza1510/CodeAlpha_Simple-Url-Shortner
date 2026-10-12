const express=require('express')
const urlcontroller=require("../controllers/url.controller")





const router=express.Router();

router.post("/uploadUrl",urlcontroller.crateshorturl)

router.get("/:shorturl",urlcontroller.getshorturl)



module.exports=router;