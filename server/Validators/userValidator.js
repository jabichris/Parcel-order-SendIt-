import { string, validate } from 'joi';

//this is for checking correct information when a new user register
exports.registrationValidator = (req, res, next) => {
  const schema = {
    // userid: Joi.number(),
    name: string().required(),
    email: string()
      .email()
      .required(),
    password: string()
      .min(4)
      .max(10)
      .required(),
    
  };
  validate(req.body, schema, (err, value) => {
    if (err) {
      res.status(400).json({
        message: "invalid user information"
      });
    } else {
      next();
    }
  });
}

//this is to check correct information when a user login

export function loginValidator(req, res, next) {
  const schema = {
    email: string()
      .email()
      .required(),
    password: string()
      .min(4)
      .max(12)
      .required()
  };
  validate(req.body, schema, (err, value) => {
    if (err) {
      res.status(400).json({
        message: "plz sign in!!!!"
      });
    } else {
      next();
    }
  });
}
