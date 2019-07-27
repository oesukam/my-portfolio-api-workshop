import { celebrate } from 'celebrate';
import { Router } from 'express';
import controller from '../controllers/EducationController';
import * as validator from './validators/educationValidators';
const router = Router();

router.post(
  '/',
  celebrate({
    body: validator.postEducation
  }),
  controller.postEducation
);

router.get('/', controller.getEducations);

router.get(
  '/:id',
  celebrate({
    params: validator.getEducation
  }),
  controller.getEducation
);

router.delete(
  '/:id',
  celebrate({
    params: validator.getEducation
  }),
  controller.deleteEducation
);

router.put(
  '/:id',
  celebrate({
    params: validator.getEducation,
    body: validator.putEducation
  }),
  controller.updateEducation
);

export default router;
