import express, { Request, Response } from "express";

const route = express();

route.get("/orders", (req: Request, res: Response) => {
  res.status(200).json({ message: "Todas as Orders" });
});
route.get("/orders/:ownerID", (req: Request, res: Response) => {
  const ownerID = req.params.ownerID;
  res.json(`Order com ID ${ownerID} encontrado`);
});
route.put("/order/:ownerID", (req: Request, res: Response) => {
    const ownerID = req.params.ownerID;
    res.json({message:`Order com ID ${ownerID} atualizado`});
  });
route.post("/order/", (req: Request, res: Response) => {
  res.status(200).json({message:"Order criado com sucesso!"});
});



export default route;