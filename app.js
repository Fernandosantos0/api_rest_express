import dotenv from 'dotenv';
dotenv.config();

/* Conexão com o banco */
import './src/database';

/* Importando o framework express */
import express from 'express';

/* Importando os arquivos de roteamentos */
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({
            extended: true
        }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/users/', userRoutes);
    }
}

export default new App().app;
