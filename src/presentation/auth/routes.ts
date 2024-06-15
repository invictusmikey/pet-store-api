import { Router } from "express";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        router.post('/login', (req,res) => {
            res.json({message: 'login'})
        })

        router.post('/register', (req,res) => {
            res.json({message: 'register'})
        })

        return router

    }

}