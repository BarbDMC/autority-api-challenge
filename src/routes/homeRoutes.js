import { Router } from 'express';
import { index, healthCheck } from '@/controllers/home';

const homeRoutes = Router();

homeRoutes.get('/', index);
homeRoutes.get('/health', healthCheck);

export default homeRoutes;
