import { Server } from "./presentation/server";
import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";
import { mongoDatabase } from "./data/mongodb";

(() => {
    main()
})()

async function main() {

await mongoDatabase.connect({

    dbName: envs.MONGO_DB_NAME,
    mongoUrl:envs.MONGO_URL,
})

    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start()
}