import Joi from 'joi';

export const courseSchema = Joi.object({
	type: Joi.string().required(),
	courseName: Joi.string().max(150).required(),
	price: Joi.number().min(0).required(),
	description: Joi.string().required(),
	image: Joi.string().max(255).uri().required(),
	watchType: Joi.string().required(),
});

export const topicSchema = Joi.object({
	topicName: Joi.string().min(4).max(150).required(),
	description: Joi.string().required(),
	link: Joi.string().max(255).uri().required(),
});
export const profileSchema = Joi.object({
	userName: Joi.string().min(6).max(255).required(),
	description: Joi.string().min(6).required(),
	website: Joi.string().uri().min(6).max(255).required(),
	avatar: Joi.string().min(6).max(255).required(),
	twitter: Joi.string().uri().min(6).max(255).required(),
});
