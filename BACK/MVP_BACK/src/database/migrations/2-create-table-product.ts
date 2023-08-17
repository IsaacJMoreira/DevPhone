import {QueryInterface, DataTypes} from 'sequelize'

export default{
    up: (queryInterface: QueryInterface)=>{
        return queryInterface.createTable('products', {
            //implementar
        });
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.dropTable('products')
    }
}