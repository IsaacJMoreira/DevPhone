import { Router } from 'express';
import orderControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
import validateCredential from '../../infra/middlewares/validadeCredential';
import middlewareOrder from '../../infra/middlewares/orders';
//TODO: IMPORT MIDDLEWARES

const orderRoutes = Router();

orderRoutes.post('/order/', decryptProvider, middlewareOrder.create, validateCredential.CLI, orderControllers.create);
orderRoutes.get('/orders', decryptProvider, validateCredential.ADM, orderControllers.findAll);
orderRoutes.get('/orders/:ownerID', decryptProvider, validateCredential.CLI, orderControllers.findByOwnerId);
orderRoutes.put('/order/:ownerID', decryptProvider, middlewareOrder.update, validateCredential.ADM, orderControllers.update);


export default orderRoutes;