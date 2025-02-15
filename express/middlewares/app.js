let express =  require("express")
let app = express();

app.use(function(req, res, next){
    console.log("new requezt at" ,Date.now())
    next();
})