import bodyParser from "body-parser";
import express, { Express } from "express";

import bullBoardAdapter from "./config/bullBoardConfig";
import serverConfig from "./config/serverConfig";
// import runPython from "./containers/runPythonDocker";
import runCpp from "./containers/runCpp";

import apiRouter from "./routes";
import sampleWorker from "./workers/SampleWorker";

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/api", apiRouter);
app.use("/ui", bullBoardAdapter.getRouter());

app.listen(4000, () => {
  console.log(`Server started at *:4000`);

  console.log(
    `BullBoard dashboard running on: http://localhost:${serverConfig.PORT}/ui`
  );

  sampleWorker("SampleQueue");

  // const code = `x = input()
  // y = input()
  // print("value of x is", x)
  // print("value of y is", y)
  // `;
  // const inputCase = `100
  // 200
  // `;

  // runPython(code, inputCase);

  const userCode = `
  
  class Solution {
    public:
    vector<int> permute() {
        vector<int> v;
        v.push_back(10);
        return v;
    }
  };
`;
const code = `
#include<iostream>
#include<vector>
#include<stdio.h>
using namespace std;

${userCode}
int main() {
  Solution s;
  vector<int> result = s.permute();
  for(int x : result) {
    cout<<x<<" ";
  }
  cout<<endl;
  return 0;
}
`;

  const inputCase = `10`

  runCpp(code, inputCase);

});
