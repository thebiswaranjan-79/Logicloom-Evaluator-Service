import express, { Express } from "express";

// import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";

const app: Express = express();

app.use('/api', apiRouter);
app.listen(4000, () => {
  console.log(`Server started at *:4000`);
});
