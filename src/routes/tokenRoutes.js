import { Router } from 'express';
import tokenController from '../controllers/TokenControllers';

const router = new Router();

router.post('/', tokenController.store);

export default router;
