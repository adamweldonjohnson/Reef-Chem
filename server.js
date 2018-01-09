'use strict';

// ==========NODE MODULE REQUIREMENTS===================
const express = require('express');
// Parses requests from frontend
const bodyParser = require('body-parser');
// For connecting db
const db = require('./db/mongoose');
// For loading files
const fs = require('fs');
// For running front and backend servers in local environment
const cors = require('cors');
// Grabbing test Schema
const Test = require('./models/testSchema');

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
  Test.create(req.body)
    .then((test) => {
      res.send(test)
    });
})

app.get('/dashboard/:userId', (req, res) => {
  // console.log(req.params.userId);
  Test.find({
    userId: req.params.userId
  }, (err, tests) => {
    res.send(tests)
  })
})

app.post('/dashboard/:userId', (req, res) => {
  // console.log(req.params.userId);
  Test.find({
    userId: req.params.userId,
    value: req.body.value,
    type: req.body.type,
  }, (err, tests) => {
    res.send(tests)
  })
})


// =====================PORT LISTENING=======================
app.listen(3000, () => {
  console.log('Now listening on port 3000');
})