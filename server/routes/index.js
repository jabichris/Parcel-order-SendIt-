import express from 'express';
import parcelsControllers from './../Controllers/parcelsControllers';
import usersController from './../Controllers/usersController';
import parcelValidate  from '../Validators/parcelValidator';
import  userValidator from '../Validators/userValidator';
import jwt from 'jsonwebtoken';
import jwtAut from '../auth/jwtAut'
const routes = express.Router();

routes.post(
  "/api/v1/parcels/parcel", 
  // parcelValidate.validator,
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
routes.get("/api/v1/parcels/:id", parcelsControllers.getOne);

//this here fetch for all parcels orders
routes.get("/api/v1/parcels", jwtAut.ensureToken, parcelsControllers.getAll,)

//this helps in fetching for all info about users
routes.get("/api/v1/users", )

//this helps the user create an account
routes.post("/api/v1/users/register", (req, res) => {
  // userValidator.registrationValidator,
  usersController.createUser
  });
//this helps the user login into their account
routes.post(
  "/api/v1/users/login",
//   userValidator.loginValidator,
  usersController.login
);
//let's give the sever some info once it's up
routes.put('/api/v1/parcels/:id/destination',parcelsControllers.changeDestination);
// change status of the parcel
routes.put('/api/v1/parcels/:id/status', jwtAut.ensureToken,parcelsControllers.changeStatus);
routes.put('/api/v1/parcels/:id/presentlocation',parcelsControllers.changePresentLocation);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "The surver is Up!" });
});




export default routes;