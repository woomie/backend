let fs = require("fs");

//fs.readFile(fileURLToPath, encodeURI, callbackfn)

fs.readFile("./note.txt", "utf-8", (err, data)=>{
    if(err){
        console.error(`this is the error ${err}`);
        return
    }
    console.log(data);
});