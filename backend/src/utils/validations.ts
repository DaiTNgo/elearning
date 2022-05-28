import Joi from 'joi';

export const userValidate = (data: any) => {
  const userSchema = Joi.object({
    email: Joi.string()
      .email()
      .pattern(/gmail.com$/)
      .lowercase()
      .required(),
    password: Joi.string().min(6).max(32).required(),
  });

  return userSchema.validate(data);
};

export const courseValidate = (data: any) => {
  const courseSchema = Joi.object({
    type: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.string().required(),
    image: Joi.string().uri().required(),
    description: Joi.string().required(),
    isLivestream: Joi.bool().required(),
    isTutorial: Joi.bool().required(),
  });

  return courseSchema.validate(data);
};
