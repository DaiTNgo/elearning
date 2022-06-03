import Joi from 'joi';

export const userSchema = Joi.object({
  user_name: Joi.string().min(6).max(255).required(),
  avatar: Joi.string().min(6).max(255).required(),
  description: Joi.string().min(6).required(),
  acc_twiter: Joi.string().uri().min(6).max(255).required(),
  my_website: Joi.string().uri().min(6).max(255).required(),
});

export const courseSchema = Joi.object({
  type: Joi.string().required(),
  courseName: Joi.string().max(150).required(),
  price: Joi.number().min(0).required(),
  image: Joi.string().max(255).uri().required(),
  description: Joi.string().required(),
  // watch: Joi.string().required(),
});

export const topicSchema = Joi.object({
  name: Joi.string().min(4).max(150).required(),
  description: Joi.string().required(),
  link: Joi.string().max(255).uri().required(),
  order: Joi.number().required(),
});
export const profileSchema = Joi.object({
  userName: Joi.string().min(6).max(255).required(),
  description: Joi.string().min(6).required(),
  website: Joi.string().uri().min(6).max(255).required(),
  avatar: Joi.string().min(6).max(255).required(),
  twitter: Joi.string().uri().min(6).max(255).required(),
});
