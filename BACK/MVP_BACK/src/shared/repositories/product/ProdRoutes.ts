import express, { Request, Response } from "express";

const route = express();

route.get("/products/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Todos os Produtos" });
});
route.get("/profile/:id", (req: Request, res: Response) => {
  const productId = req.params.id;
  res.json({ message: `Produto com ID ${productId} encontrado` });
});
route.put("/product/:id", (req: Request, res: Response) => {
  const productId = req.params.id;
  res.json({ message: `Produto com ID ${productId} atualizado` });
});
route.post("/newproduct", (req: Request, res: Response) => {
  res.status(201).json({ message: "Produto criado com sucesso!" });
});

export default route;
