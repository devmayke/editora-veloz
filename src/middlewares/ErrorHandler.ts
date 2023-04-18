import { NextFunction, Request, Response } from "express"
import { PersonalError} from "../helpers/errors/PersonalError"

export default function (err:PersonalError | Error, req:Request, res:Response, next:NextFunction){ 
    
    if (err instanceof PersonalError) return res.status(err.statusCode).json({msg:err.message})   
    return res.status(500).json({msg:err.message}) 
}