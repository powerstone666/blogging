import mongoose from "mongoose";

const schema=mongoose.Schema;

const user= new schema(
    {
      name:String,
      email:String,
      password:String
    }
)


export const Blogusers= mongoose.model('blogUsers',user);