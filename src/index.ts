import bodyParser from "body-parser";
import express, { Express } from "express";

import bullBoardAdapter from "./config/bullBoardConfig";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import sampleWorker from "./workers/SampleWorker";


const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', apiRouter);
app.use('/ui', bullBoardAdapter.getRouter());


app.listen(4000, () => {
  console.log(`Server started at *:4000`);

  console.log(`BullBoard dashboard running on: http://localhost:${serverConfig.PORT}/ui`);


sampleWorker('SampleQueue');

});
