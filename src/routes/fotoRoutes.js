import { Router } from 'express';

import fotoController from '../controllers/FotoControllers';
import loginRequeried from '../middlewares/loginRequeried';

const router = new Router();

router.post('/', loginRequeried, fotoController.store);

export default router;
