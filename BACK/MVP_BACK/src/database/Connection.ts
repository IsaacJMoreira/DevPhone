import { connect } from 'mongoose'

export default class Connection{

    private db_connection_string: string;

    constructor(db_connection_string: string){
        this.db_connection_string = db_connection_string;
    }

    async createConnection(){
        try {
            await connect(this.db_connection_string);
            console.log("Banco de dados NO-SQL conectado com sucesso!");
        } catch (error) {
            console.log(error);   
        }
    }

}