import {QueryInterface, DataTypes} from 'sequelize'

export default{
    up: (queryInterface: QueryInterface)=>{
        return queryInterface.createTable('users', {
            //implementar
        });
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.dropTable('users')
    }
}