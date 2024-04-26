import express, { Express } from "express";
// import serverConfig from "./config/serverConfig";

const app: Express = express();

app.listen(3000, () => {
  console.log(`Server started at *:3000`);
});
