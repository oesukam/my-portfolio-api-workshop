import { Router } from 'express';
import controller from '../controllers/EducationController';

const router = Router();

router.post('/', controller.postEducation);

export default router;
