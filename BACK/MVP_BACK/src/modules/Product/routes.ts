import { Router } from 'express';
import productControllers from './controller';
import decryptProvider from '../../infra/middlewares/auth';
import validateCredential from '../../infra/middlewares/validadeCredential';
import upload from '../../infra/middlewares/imgUpload';
import middlewareProducts from '../../infra/middlewares/products';

const productRoutes = Router();

productRoutes.post('/newproduct',
                    decryptProvider, 
                    validateCredential.ADM, 
                    middlewareProducts.newProduct,
                    productControllers.create);
productRoutes.post('/uploadimg/:filename',
                    decryptProvider, 
                    validateCredential.ADM, 
                    upload.single('file'), //field name
                    productControllers.imgUpload);

productRoutes.get('/products/', productControllers.paginate);
productRoutes.get('/product/:id', productControllers.findOne);
productRoutes.get('/products/search', productControllers.search);
productRoutes.put('/product/:id',
                   decryptProvider, 
                   validateCredential.ADM, 
                   middlewareProducts.updateProduct, 
                   productControllers.update);

export default productRoutes;