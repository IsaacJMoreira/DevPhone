import { Router } from 'express';
import orderControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
//TODO: IMPORT MIDDLEWARES

const orderRoutes = Router();

orderRoutes.post('/order/', decryptProvider, orderControllers.create);
orderRoutes.get('/orders',decryptProvider, orderControllers.findAll);
orderRoutes.get('/orders/:ownerID', decryptProvider, orderControllers.findByOwnerId);
orderRoutes.put('/order/:ownerID', decryptProvider, orderControllers.update);


export default orderRoutes;