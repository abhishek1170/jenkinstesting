let express = require("express");
let app = express();
app.get("/",(req,res)=>{
    res.send("hello world here");
})

app.listen(8081,()=>{
    console.log("server is listing at 8081")
})