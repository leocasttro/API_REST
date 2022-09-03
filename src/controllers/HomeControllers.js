import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Leonardo',
      sobrenome: 'Castro',
      email: 'leonardo@gmail.com',
      idade: 27,
      peso: 95.8,
      altura: 1.84,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
