'use strict';

// ==========NODE MODULE REQUIREMENTS===================
const express = require('express');
// Parses requests from frontend
const bodyParser = require('body-parser');
// For connecting db
const mongoose = require('./db/mongoose');
// For running front and backend servers in local environment
const cors = require('cors');

// Required per Express.js documentation
let app = express();

// Required per Body Parser & CORS documentation
app.use(bodyParser.json());
app.use(cors());


// ====================API ENDPOINTS======================
// TODO: for testing only
app.get('/', (req, res) => {
  res.send('works');
})
// TODO: for testing only
app.post('/dashboard', (req, res) => {
  let data = req.body;
  let userID = data.user;
  let test = data.test;
  let day = data.day;
  let month = data.month;
  let year = data.year;
  let value = data.value;
  console.log(req.body);
  // console.log(user);
  res.send('you sent me this data: ' + test + ' ' + day + ' ' + month + ' ' + year + ' and your user ID is ' + userID);
})


// =====================PORT LISTENING=======================
app.listen(3000, () => {
  console.log('Now listening on port 3000');
})