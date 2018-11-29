// const routes = require("express").Router();
// const users = require("./../data/users");
// const parcelsControllers = require("./../Controllers/parcelsControllers");
// const usersController = require("./../Controllers/usersController");
// const parcelValidate = require("../Validators/parcelValidator");
// const userValidator = require("../Validators/userValidator");
// const jwt = require ('jsonwebtoken');
import express from 'express';
// import users from "./../data/users";
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
routes.get("/api/v1/parcels", jwtAut.ensureToken, parcelsControllers.getAll,
// function (req,res){jwt.verify(req.token, 'my secret key', function(err,data){
//   if (err){
//     res.sendStatus(403)
//   }
//   else{
//       res.json({
//         text: 'This here is protected',
//         data: data
//       })
//   }
// })
)
// function ensureToken  (req, res, next){
//   const bearerHeader = req.headers["authorization"];
//   if (typeof bearerHeader !== 'undefined') {
//     const bearer = bearerHeader.split(" ");
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// }

//this helps in fetching for all info about users
routes.get("/api/v1/users", )
//  => {
//   res.send({
//     users: users
//   });
// });
//this helps the user create an account
routes.post("/api/v1/users/register", (req, res) => {
    // console.log(req.body.name)
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
routes.get("/", (req, res) => {
  res.status(200).json({ message: "The surver is Up!" });
});

routes.put('/api/v1/parcels/:id/destination',parcelsControllers.changeDestination);
// import LocationsController from './../../controllers/locations';

// // GET list of all locations
// router.post('/', LocationsController.create);
// module.exports = routes;
export default routes;