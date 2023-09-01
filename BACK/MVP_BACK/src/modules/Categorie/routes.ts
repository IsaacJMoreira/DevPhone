import { Router } from 'express';
import categorieControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
import validateCredential from '../../infra/middlewares/validadeCredential';
//TODO: IMPORT MIDDLEWARES

const categorieRoutes = Router();

categorieRoutes.get('/categories', categorieControllers.findAll);
categorieRoutes.get('/category/:name', categorieControllers.findOneByName);
categorieRoutes.put('/category/:name', decryptProvider, validateCredential.ADM,  categorieControllers.update);
categorieRoutes.post('/categorie', decryptProvider, validateCredential.ADM,  categorieControllers.create);


export default categorieRoutes;