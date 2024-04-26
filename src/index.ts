import express, {Express} from "express";

const app:Express = express();

app.listen(3000, ()=>{
    console.log("Server Started at Port 3000");
})