import express, { Express } from "express";

import sampleQueueProducer from "./producers/sampleQueueProducer";
// import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";

const app: Express = express();

app.use('/api', apiRouter);
app.listen(3000, () => {
  console.log(`Server started at *:3000`);


  sampleQueueProducer('SampleJob', {
    name : "Biswaarnjan",
    company : "MySarthi",
    position : "CEO & Founder",
    location: "Remote | BLR | Noida"
  });
});
