import Joi from "joi";

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
});

export { createTaskSchema };
