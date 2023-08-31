import { Router } from 'express';
import categorieControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
//TODO: IMPORT MIDDLEWARES

const categorieRoutes = Router();

categorieRoutes.get('/categories', categorieControllers.findAll);
categorieRoutes.get('/category/:name', categorieControllers.findOneByName);
categorieRoutes.put('/category/:name', decryptProvider, categorieControllers.update);
categorieRoutes.post('/categorie', decryptProvider, categorieControllers.create);


export default categorieRoutes;