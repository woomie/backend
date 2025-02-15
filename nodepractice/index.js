process.stdout.write("what is your name");
let name= process.stdin.on("data",(data)=>{
    console.log(`you have typed ${data}`)
    process.exit();
} );
