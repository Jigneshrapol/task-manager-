const express =require("express");
const TaskRoute = require("./Routes/TaskRoueter");
const bodyParser = require("body-parser");
const cors=require('cors');
const app =express();
require("dotenv").config();
require('./Models/db');

const PORT=process.env.PORT || 8081;
app.use(cors());
app.use(bodyParser.json());
app.use("/tasks",TaskRoute)
app.get("/",(req,res)=>{
    res.send("hello")
})



app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`);
})