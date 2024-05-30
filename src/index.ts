import express, { Express } from "express";

import bullBoardAdapter from "./config/bullBoardConfig";
import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import sampleWorker from "./workers/SampleWorker";


const app: Express = express();

app.use('/api', apiRouter);
app.use('/ui', bullBoardAdapter.getRouter());


app.listen(3000, () => {
  console.log(`Server started at *:3000`);

  console.log(`BullBoard dashboard running on: http://localhost:${serverConfig.PORT}/ui`);


sampleWorker('SampleQueue');

sampleQueueProducer('SampleJob', {
    name : "Biswaranjan",
    company : "MySarthi",
    position : "CEO & Founder",
    location: "Remote | BLR | Noida"
  },2);

  sampleQueueProducer('SampleJob', {
    name : "Biswa",
    company : "Microsoft",
    position : "SDE 1",
    location: "Remote | BLR | Noida"
  },1);
});
