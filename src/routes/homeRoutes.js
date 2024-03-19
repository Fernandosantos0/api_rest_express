import { Router } from 'express';
const routes = new Router();

routes.get('/', (req, res, next) => {
    res.status(200).send({
        tudoCerto: true
    });
});

export default routes;
