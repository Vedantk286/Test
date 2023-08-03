const express=require('express');
const app=express();
const User=require('./model/login');
const mongoose=require('mongoose');
const route=require('./routes/endpoints');

app.use(route);
mongoose.connect('mongodb://localhost:27017/log').then(()=>{
    console.log("Connected to Database Sucessfully");
}).catch((err)=>{
    console.log(err)
});



app.listen(4000,()=>{
    console.log("Listening to port 4000");
});