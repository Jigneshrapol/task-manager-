const mongoose = require("mongoose");
const DB_URL=process.env.DB_URL;


mongoose.connect(DB_URL).then(()=>{
    console.log("DB Contected....")
}).catch((err)=>{
    console.log("Err Found",err)
})