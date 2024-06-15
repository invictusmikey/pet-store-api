import { Router } from "express";
import { AutController } from "./controller";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        const controller = new AutController()

        router.post('/login', controller.loginUser)
        

        router.post('/register', controller.registerUser )

        return router

    }

}