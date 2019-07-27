import { Joi } from 'celebrate';

export const postEducation = Joi.object().keys({
  school: Joi.string()
    .trim()
    .required(),
  degree: Joi.string()
    .trim()
    .valid(['Bachelor', 'Masters'])
    .required(),
  major: Joi.string()
    .trim()
    .required(),
  fromYear: Joi.date().required(),
  toYear: Joi.date().required()
});

export const getEducation = Joi.object().keys({
  id: Joi.string().uuid()
});

export const putEducation = Joi.object().keys({
  school: Joi.string()
    .trim()
    .required(),
  degree: Joi.string()
    .trim()
    .valid(['Bachelor', 'Masters']),
  major: Joi.string().trim(),
  fromYear: Joi.date(),
  toYear: Joi.date()
});
