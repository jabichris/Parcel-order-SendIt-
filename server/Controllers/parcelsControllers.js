const routes = require("express").Router();
const parcels = require("./../data/parcels.json");
const pg = require('pg');
const pool = require('./../db/config');

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



const getAll = (req, res, next) =>{ 
  pool.query('SELECT * from parcels').then(response =>{
      res.status(200).json({
          parcels: response.rows
      });
  }).catch(err =>{
      console.log(err)
  });
}

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
  postOne,
  getAll,
  getOne,
  parcelCancelation
};
