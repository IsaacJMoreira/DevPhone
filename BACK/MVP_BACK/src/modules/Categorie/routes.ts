import { Router } from 'express';
import categorieControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
import validateCredential from '../../infra/middlewares/validadeCredential';
import middlewareCategories from '../../infra/middlewares/categories';

const categorieRoutes = Router();

categorieRoutes.get('/categories', categorieControllers.findAll);
categorieRoutes.get('/category/:name', categorieControllers.findOneByName);
categorieRoutes.put('/category/:name', decryptProvider, validateCredential.ADM, middlewareCategories.update, categorieControllers.update);
categorieRoutes.post('/category', decryptProvider, validateCredential.ADM, middlewareCategories.post, categorieControllers.create);


export default categorieRoutes;