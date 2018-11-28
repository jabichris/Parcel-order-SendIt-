const Joi = require("joi");

//this is for checking correct information when a new user register
exports.RegistrationValidator = (req, res, next) => {
  const schema = {
    // userid: Joi.number(),
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(4)
      .max(10)
      .required(),
    // retype_password: Joi.string()
    //   .min(4)
    //   .max(10)
    //   .required()
  };
  Joi.validate(req.body, schema, (err, value) => {
    if (err) {
      res.status(400).json({
        message: "invalid user information"
      });
    } else {
      next();
    }
  });
};

//this is to check correct information when a user login

// exports.LoginValidator = (req, res, next) => {
//   const schema = {
//     email: Joi.string()
//       .email()
//       .required(),
//     password: Joi.string()
//       .min(4)
//       .max(10)
//       .required()
//   };
//   Joi.validate(req.body, schema, (err, value) => {
//     if (err) {
//       res.status(400).json({
//         message: "plz sign in!!!!"
//       });
//     } else {
//       next();
//     }
//   });
// };
