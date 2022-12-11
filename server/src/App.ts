import express, {Application} from "express";
import path from "path";
import { config } from "dotenv";
import Db from "./Db";
import IO, {Server as IOServer} from "socket.io";
import {Server as HttpServer} from "http";

config({path: path.resolve(__dirname, '../.env')});

export default class App {
    private app:Application;

    public async init(){
        this.app = express();
        this.initDb();
        const httpServer: HttpServer= this.app.listen(
            process.env.NODE_PORT,
            () => console.log(`Teams clone server started ${process.env.NODE_PORT}`)
        );
        const ioServer: IOServer= new IOServer(httpServer);
        this.app.listen(process.env.NODE_PORT, 
        ()=> console.log(`Server started on port ${process.env.NODE_PORT}`))
    }

    private initDb(){
        const db = new Db();
        db.init();
    }
}