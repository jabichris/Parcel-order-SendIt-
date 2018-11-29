// const routes = require("express").Router();
// const parcels = require("./../data/parcels.json");
// const pg = require('pg');
import pool from '../db/config'
import pg from 'pg';
import jwt from 'jsonwebtoken'




const postOne = (req, res) => {
  const parcelInfo = `INSERT INTO parcels (item, parcelweight, parcelorigin, parceldestination) VALUES($1, $2, $3, $4) RETURNING *`;
  const {item, parcelweight, parcelorigin, parceldestination} = req.body;
  pool.query(parcelInfo, [
    item,
    parcelweight,
    parcelorigin,
    parceldestination
  ]).then(Response =>{
    res.status(201).send({
        message:"parcel Created!!!"
        // parcels: Response.rows[0] 
         });
}).catch(err =>{
    console.log(err)
});
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
  ///////validat


  jwt.verify(req.token, 'amandazi', function(err,data){
    if (err){
      console.log(err)
      // return res.sendStatus(403)
    }
    else {
      pool.query('SELECT * FROM parcels').then(response =>{
        res.status(200).json({
            parcels: response.rows
        });
    }).catch(err =>{
        console.log(err)
    });
    }
  })
  


  
}

const getOne = (req, res) => {
   const id = parseInt(req.params.id);
  
  pool.query(`SELECT * FROM parcels WHERE id = ${id}`).then(response =>{
    res.status(200).json({
        parcel: response.rows[0]
    });
}).catch(err =>{
    console.log(err)
});
  req.setTimeout(200);
};

export default {
  postOne,
  getAll,
  getOne,
  parcelCancelation
}
  