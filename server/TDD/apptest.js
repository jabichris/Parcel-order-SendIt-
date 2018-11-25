const chai = require("chai");
const chaiHTTP = require("chai-http");
const HTTP = require("http");
const app = require("../app");
chai.should();
chai.use(chaiHTTP);

//test for home route

describe("/", () => {
  it("it respond if the server is up", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

//test for the get all parcels api

describe("/GetParcels", () => {
  it("it should GET all the parcels", done => {
    chai
      .request(app)
      .get("/api/v1/parcels")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        done();
      });
  });
});

//test for the get one parcel  api

describe("/GET parcel details", () => {
  it("it should GET a parcel delivery order", done => {
    const id = 1003456;
    chai
      .request(app)
      .get(`/api/v1/parcels/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        done();
      });
  });
});

//test for adding new parcel
describe("adding a parcel", () => {
  it("should add new parcel", done => {
    const parcel = {
      parcelid: 1003456,
      userid: 1,
      parcelweight: 1,
      parcelorigin: "KK 802 st",
      parceldestination: "kk 532 st",
      status: "Delivered",
      createdtime: "Thu 18.11.2018 13:40"
    };
    chai
      .request(app)
      .post("/api/v1/parcels")
      .send(parcel)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("array");
        done();
      });
  });
});

//test for adding invalid new parcel
describe("adding invalid parcel", () => {
  it("should not add new parcel", done => {
    const parcel = {
      parcelid: 1003456,
      userid: 1,
      parcelweight: 1,
      parceldestination: 455,
      status: "Delivered",
      createdtime: "Thu 18.11.2018 13:40"
    };
    chai
      .request(app)
      .post("/api/v1/parcels")
      .send(parcel)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have
          .property("message")
          .eql("invalid parcel information");
        done();
      });
  });
});

//test for parcel deletion
describe("Delete a parcel with id 1003456", () => {
  it("should return one parcel object", done => {
    const parcel = 1003456;
    chai
      .request(app)
      .delete(`/api/v1/parcels/${parcel}`)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an("object");
        done();
      });
  });
});
// test for parcel cancellation
describe("Cancel a parcel with id 1003456", () => {
  it("should return one parcel object", done => {
    const parcel = 1003456;
    chai
      .request(app)
      .put(`/api/v1/parcels/${parcel}/cancel`)
      .set("content-type", "application/json")
      .send({
        status: "Canceled"
      })
      .end((err, res) => {
        res.body.should.be.an("object");
        done();
      });
  });
});

// test for innexisting parcel cancellation
describe("Cancel a parcel with id 10034561000", () => {
  it("should fail to cancel a parcel", done => {
    const parcel = 10034561000;
    chai
      .request(app)
      .put(`/api/v1/parcels/${parcel}/cancel`)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

//test for getting user parcels
describe("GET user details", () => {
  it("it should GET a user with id=1", done => {
    const id = 1;
    chai
      .request(app)
      .get(`/api/v1/users/${id}/parcels`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        done();
      });
  });
});
//test to get all users
describe("GET user all users", () => {
  it("it should GET all users", done => {
    chai
      .request(app)
      .get(`/api/v1/users`)
      .end((err, res) => {
        res.body.should.be.an("object");
        done();
      });
  });
});

//test to register a new user
describe("Register a new users", () => {
  it("Register a new user", done => {
    const user = {
      userid: 100,
      name: "umukiriya mushya",
      email: "umukiriya@gmail.com",
      password: "password"
    };
    chai
      .request(app)
      .post("/api/v1/users/register")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("user registered");
        done();
      });
  });
});

//test to register user with invalid info
describe("Register a new user with unsported information", () => {
  it("Fails to register a new user", done => {
    const user = {
      userid: 100,
      name: "umukiriya mushya",
      email: "umukiriya",
      password: "password556686"
    };
    chai
      .request(app)
      .post("/api/v1/users/register")
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have
          .property("message")
          .eql("invalid user information");
        done();
      });
  });
});

//test to login a user

describe("Login a user", () => {
  it("Log in a user", done => {
    const user = {
      email: "umukiriya@gmail.com",
      password: "password"
    };
    chai
      .request(app)
      .post("/api/v1/users/login")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("logged in successfuly");
        done();
      });
  });
});

//test to login a user who does not exist
describe("Login a user with invalid information", () => {
  it("Fails to Log in a user", done => {
    const user = {
      email: "umukiriya",
      password: 1266
    };
    chai
      .request(app)
      .post("/api/v1/users/login")
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have
          .property("message")
          .eql("invalid user information");
        done();
      });
  });
});
module.exports = app;
