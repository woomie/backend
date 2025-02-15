const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

router.post('/', (req, res) => {
    // In a real app, you would add validation and database logic here.
    res.status(201).json({ id: 3, name: 'Charlie' });
  });
  
  module.exports = router;