import { Router } from 'express';
import userController from '../controllers/UserControllers';
import loginRequeried from '../middlewares/loginRequeried';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', loginRequeried, userController.update);
router.delete('/:id', loginRequeried, userController.delete);

export default router;
