//calling express from the install package
const express = require("express");
//initalising express
const app = express();

app.use(express.static('public'));

//mock data stored
let messages =[{id:1, text:"hello world!"}]
app.use(express.json());

//defining a route
// app.get("/", (req, res)=>{
//     res.send("Hello Express!")
// });
app.get("/messages", (req, res)=>{
    res.send({messages});
});

//posting new message to the message array, using POST http method
app.post("/messages", (req,res)=>{
    const { message } = req.body;
    if(!message){
        return res.status(404).json({errorMessage: "Message is required"});
    }
    const newMessage={
        id: messages.length > 0? messages[messages.length -1].id +1: 1,
        text: message
    }
    messages.push(newMessage);
    res.status(201).json({ message: "Message added", data: newMessage });
})

app.put("/messages/:id", (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    const messageId = parseInt(id);

    // Find message by ID
    const messageIndex = messages.findIndex(msg => msg.id === messageId);

    if (messageIndex === -1) {
        return res.status(404).json({ errorMessage: "Message not found" });
    }

    // Update the message text
    messages[messageIndex].text = message;

    res.json({ message: "Message updated", data: messages[messageIndex] });
});


app.delete("/messages/:id", (req,res)=>{
    const {id} =req.params;
    const messageId =parseInt(id);
    if (messageId < 0 || messageId >= messages.length){
        return res.status(404).json({errorMessage:"message not found"})
    }
    const deletedMessage =messages.splice(messageId, 1);
    res.json({
        message: "message deleted successfully",
        data: deletedMessage[0]
    });
});

// setting the port number
const PORT =3000;

//starting the express server and tell its to listen to incoming request
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})