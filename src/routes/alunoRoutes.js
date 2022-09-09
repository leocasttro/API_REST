import { Router } from 'express';
import AlunoController from '../controllers/AlunoControllers';
import loginRequeried from '../middlewares/loginRequeried';

const router = new Router();

router.get('/', AlunoController.index);
router.post('/', loginRequeried, AlunoController.store);
router.put('/:id', loginRequeried, AlunoController.update);
router.get('/:id', AlunoController.show);
router.delete('/:id', loginRequeried, AlunoController.delete);

export default router;
