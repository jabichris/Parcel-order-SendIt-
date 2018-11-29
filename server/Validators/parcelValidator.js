import { number, string, validate } from "joi";
//this is for checking correct information when creating a new parcel
export function validator(req, res, next) {
  const schema = {
    item: number(),
    parcelweight: number().required(),
    parcelorigin: string().required(),
    parceldestination: string().required(),
  };
  validate(req.body, schema, (err, value) => {
    if (err) {
      res.status(400).json({
        message: "invalid parcel information"
      });
    } else {
      next();
    }
  });
}
