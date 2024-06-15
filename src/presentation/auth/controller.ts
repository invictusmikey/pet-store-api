import { Request,Response } from "express";

export class AutController {
    
    constructor(){}

    registerUser = (req: Request, res: Response) => {

        res.json('registerUser controller')
    }

    loginUser = (req:Request, res:Response) => {
        res.json('loginUser controller')
    }

}