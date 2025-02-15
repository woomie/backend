//when you want to use express, install it first
let express = require("express");
let usersRouter = require("./routes/users");
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRouter);


let countries ={
    Japan: "Tokyo",
    UAE: "Abu Dhabi",
    Nigeria: "Abuja",
    Portugal: "Lisbon",
    Mexico: "Mexico"
}
app.get("/countries", function(req, res){
    res.send(countries);
})
app.get("/countries/:country", function(req, res){
    console.log(req.params)
    //let coun = req.params;
    res.send(countries[req.params.country]);
})
app.get("/", function(req, res){
    res.send("Welcome!!!")
});
app.listen(4000);