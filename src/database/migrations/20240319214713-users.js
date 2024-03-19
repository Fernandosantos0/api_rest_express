'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* Criando uma tabela de alunos */
    await queryInterface.createTable('users', {

        id: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        nome: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false
        },

        password_hash: {
            type: Sequelize.STRING,
            allowNull: false
        },

        created_at: {
            type: Sequelize.DATE,
            allowNull: false
        },

        updated_at: {
            type: Sequelize.DATE,
            allowNull: false
        }

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};

