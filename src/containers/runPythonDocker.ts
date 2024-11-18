import Docker from "dockerode";

import { TestCases } from "../types/testCases";
import { PYTHON_IMAGE } from "../utils/constants";
import createContainer from "./containerFactory";

async function runPython(code: string) {
  const rawLogBuffer : Buffer[] = [];

  console.log("Initializing a New Python Docker Container");

  const pythonDockerContainer = await createContainer(PYTHON_IMAGE, [
    "python3",
    "-c",
    code,
    "stty -echo",
  ]);

  // Starting or Booting the Corresponsding Docker Container
  await pythonDockerContainer.start();

  console.log("Started the Docker Container");

  const loggerStream = await pythonDockerContainer.logs({
    stdout: true,
    stderr: true,
    timestamps: false,
    follow: true, // Whether the Logs are Streamed or Returned as a String
  });

  // Attach events on the Stream Objects to Start and Stop reading
  loggerStream.on("data", (chunk) => {
    rawLogBuffer.push(chunk);
  });

  loggerStream.on('end', ()=>{
    console.log(rawLogBuffer)
  })

  return pythonDockerContainer;
}

export default runPython;
