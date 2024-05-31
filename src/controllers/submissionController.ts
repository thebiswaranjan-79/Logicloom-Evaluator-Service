import { Request, Response } from "express";

import { CreateSubmissionDto } from "../dtos/CreateSubmissionDto";

export function addSubmission(req : Request, res : Response){
    const submissionDto = req.body as CreateSubmissionDto;
    
    // Addd Validation Using ZOD 
    return res.status(201).json ({
        success : true,
        error : {},
        message : 'Successfully Collected the Submission',
        data : submissionDto
    });
}