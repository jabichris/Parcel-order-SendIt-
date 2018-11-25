const routes = require("express").Router();
const users = require("./../data/users");
const parcelsControllers = require("./../Controllers/parcelsControllers");
const usersController = require("./../Controllers/usersController");
const parcelValidate = require("../Validators/parcelValidator");
const userValidator = require("../Validators/userValidator");

routes.post(
  "/api/v1/parcels",
  parcelValidate.validator,
  parcelsControllers.postOne
);

//this will cancel a specific parcel delivery order
routes.put(
  "/api/v1/parcels/:parcelid/cancel",
  parcelsControllers.parcelCancelation
);

//this here will fetch for parcels of a specific user
routes.get("/api/v1/users/:userid/parcels", usersController.findUser);

//this code are fetching for the specific parcelid and return all the info about it
routes.get("/api/v1/parcels/:parcelid", parcelsControllers.getOne);

//this here fetch for all parcels orders
routes.get("/api/v1/parcels", parcelsControllers.getAll);

//this helps in fetching for all info about users
routes.get("/api/v1/users", (req, res) => {
  res.send({
    users: users
  });
});
//this helps the user create an account
routes.post(
  "/api/v1/users/register",
  userValidator.RegistrationValidator,
  usersController.Register
);
//this helps the user login into their account
routes.post(
  "/api/v1/users/login",
  userValidator.LoginValidator,
  usersController.Login
);
//let's give the sever some info once it's up
routes.get("/", (req, res) => {
  res.status(200).json({ message: "The surver is Up!" });
});

module.exports = routes;
