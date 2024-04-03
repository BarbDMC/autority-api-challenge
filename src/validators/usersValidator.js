import { Validator } from 'jsonschema';

const userLoginSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 8 },
  },
  required: ['email', 'password'],
  additionalProperties: false,
};

const validateUserLogin = (user) => {
  const validator = new Validator();
  const result = validator.validate(user, userLoginSchema);
  return result;
};

export default validateUserLogin;
