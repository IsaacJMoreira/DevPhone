import { Router } from 'express';
import productControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
//TODO: IMPORT MIDDLEWARES

const productRoutes = Router();

productRoutes.post('/newproduct', decryptProvider, productControllers.create);
productRoutes.get('/allproducts', productControllers.findAll);
productRoutes.get('/product/:id', productControllers.findOne);
productRoutes.get('/products/search', productControllers.search);
productRoutes.put('/product/:id', decryptProvider, productControllers.update);

export default productRoutes;