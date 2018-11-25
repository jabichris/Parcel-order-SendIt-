[![Build Status](https://travis-ci.com/jabichris/SendIT_API.svg?branch=develop)](https://travis-ci.com/jabichris/SendIT_API)
[![Coverage Status](https://coveralls.io/repos/github/jabichris/SendIT_API/badge.svg?branch=develop)](https://coveralls.io/github/jabichris/SendIT_API?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/8e154e076b7009726bda/maintainability)](https://codeclimate.com/github/jabichris/SendIT_API/maintainability)
# SendIT_API
How to install:

       *git clone git@github.com:jabichris/SendIT_API.git
       *npm install
       *npm start
       
   -----We are good to go------
   
How to run the app:

       *open your browser preferably google chrome and go to http://localhost:3000/
       
How to test:

       *npm run test

table of API endpoints:



| ________Method______________ | ________Endpoints_____________ | _____Functionality_______________________________ |
|------------------------------|--------------------------------|---------------------------------------------------|
|GET /parcels                  |/api/v1/parcels                 |Fetch all parcel delivery orders                   |
|GET /parcels/parcelid         |/api/v1/parcels/:parcelid       |Fetch a specific parcel delivery order             |
|GET /Users/userid/parcels     |/api/v1/users/:userid/parcels   |Fetch all parcel delivery orders by a specific user|
|PUT /parcels/<parcelid>/cancel|/api/v1/parcels/:parcelid/cancel|Cancel the specific parcel delivery order          |
|Post /parcels                 |/api/v1/parcels                 |Create a parcel delivery order                     |

credits:

        *Goes to my team members(Team-Sylvance) in Andela KIGALI cycle 1 bootcamp.
        *Online platforms such as stackover flow,google,udemy and not forgeting the Andela homestudy.



Author:

       JABIRO Christian
