import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res, next) {
        const novoAluno = await Aluno.create({
            nome: 'Maria',
            sobrenome: 'Oliveira',
            email: 'maria.oliveira@gmail.com',
            idade: 29,
            peso: 58.45,
            altura: 1.61
        });

        res.status(200).json(novoAluno);
    }
}

export default new HomeController();
