require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json())

// Route 
const jobsRoute = require("./router/routes")


// use for route 
app.use(jobsRoute);



const Port = process.env.PORT;
app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);
})