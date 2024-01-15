
import { NextFunction, Request, Response } from "express"
import joi from "joi"

// create validation schema
let schema = joi.object({
    panjang: joi.number().required().min(1),
    lebar: joi.number().required().min(1),
    tinggi: joi.number().required().min(1),
    
})

//create a validation faunction
let validatecube= (request: Request, response: Response, next: NextFunction) =>{
    let {error} = schema.validate(request.body)
    if(error){
        // status 400 = 800 BAD REQUEST
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

export {validatecube}