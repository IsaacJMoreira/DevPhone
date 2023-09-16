import express, { Request, Response } from "express";

const route = express();

route.get("/allusers", (req: Request, res: Response) => {
  res.status(200).json(console.log("Todos os Users"));
});
route.get("/profile/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json(`Usuário com ID ${userId} atualizado`);
});
route.post("/api/users", (req: Request, res: Response) => {
  res.status(201).json(console.log("User criado com sucesso!"));
});

route.put("/profile/:id", (req: Request, res: Response) => {
  const userId = req.params.id;
  res.json(`Usuário com ID ${userId} atualizado`);
});

export default route;
