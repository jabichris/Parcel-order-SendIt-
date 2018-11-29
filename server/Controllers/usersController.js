// const users = require("./../data/users.json");
// const parcels = require("./../data/parcels.json");
// const pg = require('pg');
// const pool = require('./../db/config');
// const jwt = require ('jsonwebtoken');
import pool from './../db/config';
import jwt from 'jsonwebtoken'
//this here will fetch for parcels of a specific user
const createUser = (req, res) => {
  const userInfo = `INSERT INTO users (name, email, password) VALUES($1, $2, $3)`;
  const {name, email, password} = req.body;
  pool.query(userInfo, [
    name,
    email,
    password
  ]).then(Response =>{
    res.status(201).send({
        message:"user Created!!!"
         });
}).catch(err =>{
    console.log(err)
});
};
const findUser = (req, res) => {}
// exports.findUser = function(req, res) {
//   const id = req.params.userid;
//   const result = parcels.filter(c => c.userid == id);
//   if (result) {
//     res.status(200).send({
//       parcels: result
//     });
//   }
// };

// create new user

const login = (req, res) =>{
  const credentials =`SELECT * FROM users WHERE email = $1 AND password = $2 ;` ;
  const {email, password} = req.body;
  pool.query(credentials, [email, password]).then(Response => {
    if(Response.rows.length > 0){
      res.send({
        message: 'success',
        token:jwt.sign(Response.rows[0], 'amandazi')
      })
    }
  })
}

export default {
  createUser,
  login,
  findUser
}
