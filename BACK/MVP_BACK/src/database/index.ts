import Connection from "./Connection";

const mongoDB = new Connection('mongodb://0.0.0.0:27017/DevPhone');

export{ mongoDB };