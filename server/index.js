import express from 'express'
import mongoose from 'mongoose';
import { Blogusers } from './model.js';

const server=express();



server.use(express.json())

server.get("/",(req,res)=>{
    res.send("hyy")
})

server.post("/register",async (req,res)=>{
    const users=req.body;
    if(!users)
    {
        res.json({
            "message":"Invalid request"
        })
    }
    else{
        const email=await Blogusers.findOne({email:users.email});
        if(email)
        {
            res.json({
                "message":"user already exists"
            })
        }
        else{
            await Blogusers.insertOne(
                {
                    name:users.name,
                    email:users.email,
                    password:users.password
                }
            )
            res.json({
                "message":"successfull"
            })
        }

    }
})





await mongoose.connect("mongodb+srv://imranpasha8225:md5MP1YPNsRQc3F3@cluster0.4milk.mongodb.net/Markus?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected!'));

server.listen(3000,()=>{
    console.log("server running on port 3000")
})