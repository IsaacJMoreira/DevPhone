import { Router } from 'express';
import controller from './controller';

const routes = Router();

routes.post('/categorie', controller.create);
routes.get('/categorie', controller.find);
routes.get('categorie/code', controller.findOne);



export default routes;