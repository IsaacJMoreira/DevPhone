import sequelizeDatabase from "./DbSequelize"

const mode = process.env.NODE_ENV || 'dev'
interface Config{
    [key : string ]:any
}
const config: Config = {
    test: {
        _id: "1923912",
        name: "Loli",
        email: "1123123@email.com",
        credential: "123123",
        password: "2346236",
        DB_CONFIG: {
            dialect: "mongoDB",
            host:"localhost",
            port:"3306" 
        }
        
    },
    dev:{
        _id: "1923912",
        name: "Loli",
        email: "1123123@email.com",
        credential: "123123",
        password: "2346236",
        DB_CONFIG: {
            dialect: "mongoDB",
            host:"localhost",
            port:"3306" 
        }
    }
}

const db = sequelizeDatabase(config[mode]._id, ) 

export {db}