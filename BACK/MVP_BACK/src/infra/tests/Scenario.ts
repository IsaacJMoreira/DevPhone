import { Sequelize } from "sequelize";

export class Scenario {
    instance: Sequelize

    constructor(instance: Sequelize) {
        this.instance = instance
    }
    async init() {
        this.instance.query('')
    }
}