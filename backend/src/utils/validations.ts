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
