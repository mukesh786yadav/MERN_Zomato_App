import  express  from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

//importing config file
import privateRouteConfig from "./config/route.config"

//database connection 
import ConnetDB from "./database/connection.js";

//importing All router
import  Auth from "./api/auth";
import Food from  "./api/food";
import Restaurant from  "./api/restaurant";
import User from  "./api/user";
import Menu from "./api/menu";
import Order from "./api/order";
import Review from "./api/review";
import Image from "./api/image";
 dotenv.config();
const zomato =express();
//adding additional configration
privateRouteConfig(passport);

zomato.use(express.json());
zomato.use(session({ secret: process.env.JWTSECRET }));
zomato.use(passport.initialize());

zomato.get("/",(req,res)=>{
    res.json({message:"Hello world"})
})
// all routes ...
zomato.use("/auth",Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/image", Image);

zomato.listen(4000, ()=>{
    ConnetDB()
    .then( ()=>{
        console.log("Server is running on port 4000")
    })
    .catch( (error)=>{
        console.log("server is running but data base connectin fail !!!")
    })
})