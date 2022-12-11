import mongoose from "mongoose";

export default class Db{
    public async init(){
        mongoose.connect(
        process.env.MONGODB_CONNECTION_STRING || '',
        ()=> console.log("Connected to mongo db"))
    }
}