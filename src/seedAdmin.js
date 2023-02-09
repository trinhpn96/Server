import Admin from "./model/adminKeyAndPassword";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const uri = process.env.MONGO_URI;
const adminUsers = [   
    new Admin({
        username:"trinhrosie",
        password: "trinhng",
        fullName: "Pham ngoc trinh",
        photos: [ "https://static.seattletimes.com/wp-content/uploads/2018/01/a8e801dc-f665-11e7-bf8f-ddd02ba4a187-780x1181.jpg",]
    }),]
// Run db (database) with MongoDB --> đợi server connect tới database hoàn thành thì server mới truyền qua lại client
mongoose.set("strictQuery", false);
mongoose.connect(uri).then(async () => {
    await adminUsers[0].save((err,result)=>{
        if(err){
            console.log("err")
        }
        console.log("seed success",result);
    })
})