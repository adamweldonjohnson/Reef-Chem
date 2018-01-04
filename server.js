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
  let user = data.user
  res.send(data);
})


// =====================PORT LISTENING=======================
app.listen(3000, () => {
  console.log('Now listening on port 3000');
})