import { Router } from 'express';
import productControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
import validateCredential from '../../infra/middlewares/validadeCredential';
import upload from '../../infra/middlewares/imgUpload';

const productRoutes = Router();

productRoutes.post('/newproduct',
                    decryptProvider, 
                    validateCredential.ADM, 
                    //midleware for data validation
                    productControllers.create);
productRoutes.post('/uploadimg',
                    decryptProvider, 
                    validateCredential.ADM, 
                    upload.single('file'), //field name
                    productControllers.imgUpload);

productRoutes.get('/allproducts', productControllers.findAll);
productRoutes.get('/product/:id', productControllers.findOne);
productRoutes.get('/products/search', productControllers.search);
productRoutes.put('/product/:id',decryptProvider, validateCredential.ADM,  productControllers.update);

export default productRoutes;