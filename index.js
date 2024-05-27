const express=require("express");
const port=3000;
const app=express();

app.set("view engine","ejs");

app.listen(port,()=>{
  console.log('server is runnin on port',port);
})