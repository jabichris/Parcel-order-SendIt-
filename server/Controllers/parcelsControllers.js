const parcels = require("./../data/parcels.json");
const postOne = (req, res) => {
  const parcel = {
    parcelid: parcels.length + 1,
    userid: req.body.userid,
    parcelweight: req.body.parcelweight,
    parcelorigin: req.body.parcelorigin,
    parceldestination: req.body.parceldestination,
    status: "created",
    created_time: req.body.created_time
  };
  parcels.push(parcel);
  res.send(parcels);
};

//this will cancel a specific parcel delivery order

const parcelCancelation = (req, res) => {
  const parcel = parcels.find(
    p => p.parcelid === parseInt(req.params.parcelid)
  );

  if (!parcel) res.status(404).send("Parcel order with given id was not found");

  parcel.status = "Canceled";

  res.send(parcel);
};

//this here fetch for all parcels orders
const getAll = (req, res) => {
  res.status(200).send({
    parcels: parcels
  });
};
//this code are fetching for the specific parcelid and return all the info about it
const getOne = (req, res) => {
  const id = parseInt(req.params.parcelid);
  parcels.map(parcel => {
    if (parcel.parcelid === id) {
      return res.status(200).send({
        parcel: parcel
      });
    }
  });
  req.setTimeout(200);
};

module.exports = {
  getAll,
  getOne,
  parcelCancelation,
  postOne
};
