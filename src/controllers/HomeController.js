import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res, next) {
        const novoAluno = await Aluno.create({
            nome: 'Gustavo',
            sobrenome: 'Guanabara',
            email: 'gustavo.guanabara@gmail.com',
            idade: 45,
            peso: 75.45,
            altura: 1.91
        });

        res.status(200).json(novoAluno);
    }
}

export default new HomeController();
