import { Router } from 'express';
import productControllers from './controller';
//TODO: IMPORT MIDDLEWARES

const productRoutes = Router();

productRoutes.post('/adm/newproduct', productControllers.create);
productRoutes.get('/product/allproducts', productControllers.findAll);
productRoutes.get('/product/:id', productControllers.findOne);
productRoutes.get('/product/category/:category', productControllers.findByCategory);
productRoutes.get('/product/name/:name', productControllers.findByName);
productRoutes.put('/product/:id', productControllers.update);
productRoutes.delete('/product/:id', productControllers.delete);

export default productRoutes;