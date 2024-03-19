import { Router } from 'express';
const routes = new Router();

import userController from '../controllers/UserController';

routes.post('/', userController.store);

export default routes;

/*
    Um controle deve ter no máximo 5 métodos

    index -> lista todos os usuários -> GET
    store/create -> cria um novo usuário -> GET
    delete -> apaga um usário -> DELETE
    show -> mostra um usuário -> GET
    update -> atualiza um usuário -> PATCH ou PUT
*/
