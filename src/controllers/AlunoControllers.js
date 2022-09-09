import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll({ attributes: ['id', 'nome', 'email', 'idade', 'peso', 'altura'] });
    return res.json(aluno);
  }

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      const {
        id,
        nome,
        email,
        idade,
        peso,
        altura,
      } = novoAluno;
      return res.json({
        id, nome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: 'Faltando o id',
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: 'Aluno não existe',
        });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.messages),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: 'Faltando o id',
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: 'Aluno não existe',
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.messages),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: 'Faltando o id',
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: 'Aluno não existe',
        });
      }

      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.messages),
      });
    }
  }
}

export default new AlunoController();
