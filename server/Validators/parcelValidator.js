const Joi = require("joi");
//this is for checking correct information when creating a new parcel
exports.validator = (req, res, next) => {
  const schema = {
    parcelid: Joi.number(),
    userid: Joi.number(),
    parcelweight: Joi.number().required(),
    parcelorigin: Joi.string().required(),
    parceldestination: Joi.string().required(),
    status: Joi.string().required(),
    createdtime: Joi.string()
  };
  Joi.validate(req.body, schema, (err, value) => {
    if (err) {
      res.status(400).json({
        message: "invalid parcel information"
      });
    } else {
      next();
    }
  });
};
