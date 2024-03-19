import { Router } from 'express';
const routes = new Router();

import HomeController from '../controllers/HomeController';

routes.get('/', HomeController.index);

export default routes;
