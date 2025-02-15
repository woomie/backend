const express = require('express');
const app = express();
const port = 3000;

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

const userRoute = require("./routes/users");
app.use("/users", userRoute);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});
