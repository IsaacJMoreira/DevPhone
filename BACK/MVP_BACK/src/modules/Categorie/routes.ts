import { Router } from 'express';
import categorieControllers from './controller';
//TODO: IMPORT MIDDLEWARES

const categorieRoutes = Router();

categorieRoutes.get('/categories', categorieControllers.findAll);
categorieRoutes.get('/categorie/:name', categorieControllers.findOneByName);
categorieRoutes.put('/categorie/:name', categorieControllers.update);
categorieRoutes.post('/categorie', categorieControllers.create);


export default categorieRoutes;