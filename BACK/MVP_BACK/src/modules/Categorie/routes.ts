import { Router } from 'express';
import categorieControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
//TODO: IMPORT MIDDLEWARES

const categorieRoutes = Router();

categorieRoutes.get('/categories', categorieControllers.findAll);
categorieRoutes.get('/categorie/:name', categorieControllers.findOneByName);
categorieRoutes.put('/categorie/:name', decryptProvider, categorieControllers.update);
categorieRoutes.post('/categorie', decryptProvider, categorieControllers.create);


export default categorieRoutes;