import { Router } from "express";
import { UserControl } from "./UserController";

const userRouter: Router = Router();

userRouter.post("/logon", UserControl);
userRouter.get("/allusers", UserControl.recuperarTodos);
userRouter.get("/profile/:id", UserControl.recuperarPeloId);
userRouter.put("/profile/:id", UserControl);

export default userRouter;