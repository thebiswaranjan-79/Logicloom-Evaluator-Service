import DockeStreamOutput from "../types/dockerStreamOutput";

function decodeDockerStream(buffer: Buffer){
    let offset = 0; // This varible keeps track of the Current Position in the Buffer While Parsing
   
   // The output that will store the accumulated stdout and stderr output as String
    const output: DockeStreamOutput = {stdout:'', stderr:''};

    // Loop Until offset reaches the end of the Buffer
    while(offset < buffer.length){

        // Channel is read from the Buffer and has value of type of Stream
        const channel = buffer[offset];

        if(channel === 1){
            //stdout stream
        }else if(channel === 2){
            // stderr stream
        }
    }
}