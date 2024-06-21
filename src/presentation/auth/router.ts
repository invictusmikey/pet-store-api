import { Router } from "express";
import { AutController } from "./controller";
import { AuthDataSourceImpl , AuthRepositoryImpl} from "../../infraestructure";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();
        const datasource = new AuthDataSourceImpl()
        const AuthRepository = new AuthRepositoryImpl(datasource)
        const controller = new AutController(AuthRepository)

        router.post('/login', controller.loginUser)
        

        router.post('/register', controller.registerUser )

        return router

    }

}