import express from "express";
import morgan from "morgan";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

export class Server {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.settings();
      this.middlewares();
      this.routes();
    }
  
    //server listen
    listen() {
      this.app.listen(this.port);
      console.log(`server on port ${this.app.get("port")}`);
    }
  
    //server settings
    settings() {
      this.app.set("port", this.port || process.env.PORT);
      this.app.set("json spaces", 2);
    }
  
    //server middlewares
    middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
    }
  
    //server routes
    routes() {
      
    }
  }