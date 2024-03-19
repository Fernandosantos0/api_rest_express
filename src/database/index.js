/* Módulo de conexão com o banco de dados */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';

/* Models do banco (tabelas) */
const models = [Aluno];

/* Conexão com o banco de dados */
const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
