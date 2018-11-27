const Joi = require("joi");
//this is for checking correct information when creating a new parcel
exports.validator = (req, res, next) => {
  const schema = {
    item: Joi.string().required(),
    parcelweight: Joi.number().required(),
    parcelorigin: Joi.string().required(),
    parceldestination: Joi.string().required(),
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
