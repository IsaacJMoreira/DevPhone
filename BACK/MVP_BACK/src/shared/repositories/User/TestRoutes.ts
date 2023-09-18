import express, { Request, Response } from "express";

const route = express();

route.get("/allusers", (req: Request, res: Response) => {
  res.status(200).json({ message: "Todos os Users" });
});
route.get("/profile/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json(`Usuário com ID ${userId} atualizado`);
});
route.post("/api/users", (req: Request, res: Response) => {
  res.status(201).json({message:"User criado com sucesso!"});
});

route.put("/profile/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json({message:`Usuário com ID ${userId} atualizado`});
});

export default route;
