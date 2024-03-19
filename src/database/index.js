/* Módulo de conexão com o banco de dados */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

/* Models do banco (tabelas) */
const models = [Aluno, User];

/* Conexão com o banco de dados */
const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
