const users = require("./../data/users.json");
const parcels = require("./../data/parcels.json");
const pg = require('pg');
const pool = require('./../db/config');

//this here will fetch for parcels of a specific user

exports.findUser = function(req, res) {
  const id = req.params.userid;
  const result = parcels.filter(c => c.userid == id);
  if (result) {
    res.status(200).send({
      parcels: result
    });
  }
};

// create new user
exports.Register = function (req, res) {
  const { name, email, password} = req.body;
  pool.query('INSERT INTO users (name, email, password) VALUES($1, $2, $3)', [
    name,
    email,
    password
    
  ]).then(Response =>{
    res.status(200).json({
        users: Response.rows
    });
}).catch(err =>{
    console.log(err)
});
};

exports.Login = (req, res) => {
  const { email, password } = req.body;
  const findUser = users.find(auser => auser.email == email);
  if (findUser && findUser.password == password) {
    res.status(200).json({
      message: "logged in successfuly",
      user: findUser
    });
  }
};
