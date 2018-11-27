const users = require("./../data/users.json");
const parcels = require("./../data/parcels.json");

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
exports.Register = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
    created_time: Date.now()
  };
  users.push(newUser);
  return res.status(201).json({
    message: "Account Created!",
    users
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
