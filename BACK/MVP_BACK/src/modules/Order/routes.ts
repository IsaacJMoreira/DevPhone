import { Router } from 'express';
import orderControllers from './controller';
//TODO: IMPORT MIDDLEWARES

const orderRoutes = Router();

orderRoutes.post('/order/:ownerID', orderControllers.create);
orderRoutes.get('/orders', orderControllers.findAll);
orderRoutes.get('/orders/:ownerID', orderControllers.findByOwnerId);
orderRoutes.put('/order/:ownerID', orderControllers.update);


export default orderRoutes;