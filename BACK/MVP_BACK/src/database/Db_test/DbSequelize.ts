import { Sequelize,Options} from "sequelize";
import iDatabase from "./iDatabase"

class sequelizeDatabase implements iDatabase{
    intance: Sequelize
    constructor(
        _id: string,
        name: string,
        email: string,
        credential: string,
        password: string,){
        this.instance = new Sequelize(name,email,credential,password)
    }

    async hasConnection() {
        try {
            await this.instance.authenticate();
            console.log("Conectado!" )
        } catch (error) {
            console.error("Nao conectado!")
        }
    }
}

export default sequelizeDatabase; 