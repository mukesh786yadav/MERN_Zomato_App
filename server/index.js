import  express  from "express";
import dotenv from "dotenv";
//database connection 
import ConnetDB from "./database/connection.js";
 dotenv.config();
const zomato =express();

zomato.use(express.json());

zomato.get("/",(req,res)=>{
    res.json({message:"Hello world"})
})

zomato.listen(4000, ()=>{
    ConnetDB()
    .then( ()=>{
        console.log("Server is running on port 4000")
    })
    .catch( (error)=>{
        console.log("server is running but data base connectin fail !!!")
    })
})