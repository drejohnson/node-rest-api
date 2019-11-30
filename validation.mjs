import Joi from "@hapi/joi";

export const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(6)
      .max(64)
      .required(),
    email: Joi.string()
      .min(6)
      .max(120)
      .required()
      .email({ minDomainSegments: 2 }),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

export const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .max(120)
      .required()
      .email({ minDomainSegments: 2 }),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};
