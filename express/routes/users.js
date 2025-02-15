const express = require("express");
const validateUser = require("../middlewares/validateUser");

let router = express.Router();
let users =[

    {id:1, name:"Wunmz", email:"babydoll@gmail.com"},
    {id:2, name:"Wumz", email:"babydoll@gmail.com"}
]

//get request
router.get("/", function(req, res){
    res.send("This is get from user router")
})

router.get("/user", function(req, res){
    res.send("This is from a particular user");
})
//post request, this will add to the array
router.post("/",validateUser, (req,res)=>{
    const {name, email} = req.body
    
    const userObj ={
        id: users.length +1,
        name,
        email
    }

    users.push(userObj);
    res.status(201).json({
        message: "user has been created",
        user: userObj
    })
})

//using Put, this will update the array
router.put("/:id", (req,res)=>{
    const {id} = req.params;
    const {name, email} = req.body;
    const userIndex = users.findIndex(user =>user.id === parseInt(id))

    if(userIndex === -1){
        return res.status(404).json({errorMessage: "User not found"})
    }

    const updatedUser = {
        ...users[userIndex], name, email
    }
    users[userIndex]= updatedUser;

    res.json({
        message: "User has been updated",
        user: updatedUser
    })
})

router.delete("/:id", (req, res)=>{
    const {id} =req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id))
    if(userIndex === -1){
        return res.status(404).json({errorMessage: "user not found"})
    }
    const deletedUser = users.splice(userIndex, 1);
    res.json({
        message: "User has been deleted",
        user: deletedUser[0] 
    })

})

module.exports = router;