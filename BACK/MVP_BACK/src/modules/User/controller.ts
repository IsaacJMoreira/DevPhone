import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../../models";


const userController = {
    async create(req: Request, res: Response) {
        const {name, email, password} = req.body;
        const newPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create({name, email, password: newPassword})
        return res.status(201).json(newUser);
    },
    
    



};

export default userController;