import express, { Application, json } from "express";
import userRouter from "./repositories/User/userRouter";

const API: Application = express();
API.use(userRouter);

export default API;
