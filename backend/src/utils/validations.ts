import Joi from 'joi';

export const userValidate = (data: any) => {
  const userSchema = Joi.object({
    email: Joi.string().email().max(155).lowercase().required(),
    password: Joi.string().min(6).max(32).required(),
  });

  return userSchema.validate(data);
};
export const updateUserValidate = (data: any) => {
  const userSchema = Joi.object({
    user_name: Joi.string().min(6).max(255).required(),
    avatar: Joi.string().min(6).max(255).required(),
    description: Joi.string().min(6).required(),
    acc_twiter: Joi.string().uri().min(6).max(255).required(),
    my_website: Joi.string().uri().min(6).max(255).required(),
  });

  return userSchema.validate(data);
};
export const courseValidate = (data: any) => {
  const courseSchema = Joi.object({
    type: Joi.string().required(),
    name: Joi.string().max(150).required(),
    price: Joi.string().required(),
    image: Joi.string().max(255).uri().required(),
    description: Joi.string().required(),
    watch: Joi.string().required(),
  });

  return courseSchema.validate(data);
};

export const topicValidate = (data: any) => {
  const topicSchema = Joi.object({
    name: Joi.string().min(4).max(150).required(),
    description: Joi.string().required(),
    link: Joi.string().max(255).uri().required(),
    order: Joi.number().required(),
  });

  return topicSchema.validate(data);
};
