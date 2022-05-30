import Joi from 'joi';

export const userValidate = (data: any) => {
  const userSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
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
    watch: Joi.string().required(),
  });

  return courseSchema.validate(data);
};

export const topicValidate = (data: any) => {
  const topicSchema = Joi.object({
    name: Joi.string().min(4).max(150).required(),
    description: Joi.string().required(),
    link: Joi.string().uri().required(),
    order: Joi.number().required(),
  });

  return topicSchema.validate(data);
};
