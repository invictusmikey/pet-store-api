import mongoose from "mongoose";

interface Options {

    mongoUrl: string;
    dbName:string
}

export class mongoDatabase {

    static async connect(options:Options) {
        
        const {dbName,mongoUrl} = options

        try {
            
            await mongoose.connect(mongoUrl, {
                dbName:dbName,
            });

            console.log("mongo is conected succesfull");
            return true
            

        } catch (error) {
            
            console.log("mongo connected ¡error!");

            throw error;
            
        }
    }
}