import Express, { Application } from 'express';
import { mongoDB } from '../database'
import BaseRoutes from './BaseRoutes'


type SetupOptions = {
    isTest?: boolean;
    port?: number;
};

export default class App{

    private instance: Application;
    private defaultPort : number = 4000;

    constructor(){
        this.instance = Express();
    }

    setup(options: SetupOptions): void {


        mongoDB.createConnection();
        const selectedPort = options.port ? options.port : this.defaultPort;
        this.instance.use(Express.json());
        this.instance.use(BaseRoutes);//this stays like this for now

        if(options.isTest) return;

        this.instance.listen(selectedPort, ()=>{
            console.log(`Server running with port: ${selectedPort}`);
        });
    }

    getInstance(){
        return this.instance;
    }

}