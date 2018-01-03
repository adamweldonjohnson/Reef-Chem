'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/reef-data', {
  useMongoClient: true
});

module.exports = mongoose;