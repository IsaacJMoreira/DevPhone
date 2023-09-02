import { Router } from 'express';
import express from 'express';
import productRoutes from '../../modules/Product/routes';
import orderRoutes from '../../modules/Order/routes';
import categorieRoutes from '../../modules/Categorie/routes';
import cors from 'cors';
const app = express()


const routes= Router();
app.use(cors())

routes.use(productRoutes);
routes.use(orderRoutes);
routes.use(categorieRoutes);

export default routes;