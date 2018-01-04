'use strict';
// Require statements
const mongoose = require('mongoose');
// Setting up schema and storing as variable
let testSchema = mongoose.Schema({
  pH: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Alkalinity - may seem like duplicate of pH, but measures buffering ability of water.
  Alk: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  //Ammonia
  Ammonia: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  //Calcium
  Ca: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Nitrite
  NO2: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Nitrate
  NO3: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Phosphate
  PO: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Salinity
  S: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Specific Gravity
  SG: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Magnesium
  Mg: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Iodine
  I: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Silica
  SiO2: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Stontium
  Sr: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  //Boron
  B: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  //Iron
  Fe: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Temperature
  Temp: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Associates test battery data with specific date
  date: {
    type: Date,
    required: false,
    trim: true,
    minLength: 1
  },
  // Associates data with specific user.
  userId: {
    type: Number,
    required: false,
    trim: true,
    minLength: 1
  },
  // Associates test data with specific tank
  tankId: {
    type: Mixed, // TODO: find out if  tank id is mixed
    required: true,
    trim: true,
    minLength: 1 // TODO: find out length of tankId
  }
})
// Setting 'Test' model using testSchema
let Test = mongoose.model('Test', testSchema);
// Exporting for use in server.js
module.exports = Test;