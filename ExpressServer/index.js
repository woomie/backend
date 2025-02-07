import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    //console.log(req);
    res.send("<h1>homepage</h1>")
});
app.get("/about", (req,res)=>{
    //console.log(req);
    res.send("<h1>About me</h1>")
});
app.get("/contact", (req,res)=>{
    //console.log(req);
    res.send("<h1>Contact me</h1>")
});

app.listen (port, ()=>{
    console.log(`server running on port ${port}`);
});