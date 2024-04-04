import { Router } from 'express';
import homeRoutes from './homeRoutes';
import loginRoutes from './loginRoutes';
import todosRoutes from './todosRoutes';

const router = Router();

router.use(homeRoutes);
router.use(loginRoutes);
router.use(todosRoutes);

export default router;
