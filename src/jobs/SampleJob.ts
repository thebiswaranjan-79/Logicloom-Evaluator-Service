import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefinition";

export default class SampleJob implements IJob {
    name: string;
    payload?: Record<string, unknown>;
    constructor(payload : Record<string, unknown>){
        this.payload = payload;
        this.name = this.constructor.name; // Same as the Class Name 
    }
 

    handle = (job? : Job) => {
        console.log("Handle of the Job Called");
        console.log(this.payload);
        if(job){
            console.log(job.name, job.id, job.data);
        }
    };


    failed = (job? : Job) : void => {
        console.log("Job Failed");
        if(job){
            console.log(job.id);
        }
    };
}