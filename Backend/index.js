const express = require("express");
require('dotenv').config();
const cors =require('cors');
const db =require('./services/Db');
const app = express();

const PORT = process.env.PORT || 3000;



//default route
app.get("/",(req,res)=>
{
    res.json({message:"Api is Running"})
});

app.listen(PORT,()=>{
    console.log(`App listening at http://localhost:${PORT}`);
})
