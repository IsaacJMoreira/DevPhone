import { Router } from 'express';
import productControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
//TODO: IMPORT MIDDLEWARES

const productRoutes = Router();

productRoutes.post('/adm/newproduct', decryptProvider, productControllers.create);
productRoutes.get('/product/allproducts', productControllers.findAll);
productRoutes.get('/product/:id', productControllers.findOne);
productRoutes.get('/product/category/:category', productControllers.findByCategory);
productRoutes.get('/product/name/:name', productControllers.findByName);
productRoutes.put('adm/product/:id', decryptProvider, productControllers.update);
productRoutes.delete('adm/product/:id', decryptProvider, productControllers.delete);

export default productRoutes;