const express=require ('express');
const urlroutes=require("./routes/url.routes")






const app = express();
app.use(express.json());


app.use("/api/url",urlroutes);


module.exports=app;





