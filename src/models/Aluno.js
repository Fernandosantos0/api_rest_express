import Sequelize , { Model } from 'sequelize';

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            sobrenome: Sequelize.STRING,
            email: Sequelize.STRING,
            idade: Sequelize.INTEGER,
            peso: Sequelize.DECIMAL(5, 2),
            altura: Sequelize.DECIMAL(3, 2)
        }, {
            sequelize
        });
        return this;
    }
}
