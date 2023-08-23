import { Router } from 'express';
import shoppingCartControllers from './controller';
//TODO: IMPORT MIDDLEWARES

const shoppingCartRoutes = Router();

shoppingCartRoutes.post('/shoppingcart/:ownerID', shoppingCartControllers.create);
shoppingCartRoutes.get('/adm/shoppingcarts', shoppingCartControllers.findAll);
shoppingCartRoutes.get('/shoppingcart/:ownerID', shoppingCartControllers.findOne);
shoppingCartRoutes.put('/shoppingcart/:ownerID', shoppingCartControllers.update);


export default shoppingCartRoutes;