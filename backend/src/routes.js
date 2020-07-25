import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users/create', UserController.store);

// All the routes that come after this will use the authMiddleware
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
