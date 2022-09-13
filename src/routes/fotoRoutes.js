import { Router } from 'express';
import loginRequeried from '../middlewares/loginRequeried';

import fotoController from '../controllers/FotoControllers';

const router = new Router();

router.post('/', loginRequeried, fotoController.store);

export default router;
