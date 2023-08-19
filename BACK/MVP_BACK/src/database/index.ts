import MongoConnection from "./MongoConnection";

const mongoDB = new MongoConnection('mongodb://0.0.0.0:27017/DevPhone');

export{ mongoDB };