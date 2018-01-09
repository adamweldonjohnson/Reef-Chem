'use strict';
// Require statements
const mongoose = require('mongoose');
// Setting up schema and storing as variable

// =================DEVELOPER NOTES============
// NOTE: VARIOUS TESTS ADDED BELOW FOR FUTURE USE. INITIAL RELEASE WILL ONLY SUPPORT PH, TEMPERATURE, AND NITRATES

let testSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
    minLength: 2
  },
  value: {
    type: Number,
    required: true,
    trim: true,
    minLength: 1
  },
  // Associates test battery data with specific date
  date: {
    type: Date,
    required: false,
    trim: true,
    minLength: 1,
    default: Date.now
  },
  // Associates data with specific user.
  userId: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  // // Associates test data with specific tank
  // tankId: {
  //   type: Mixed, // TODO: find out if  tank id is mixed
  //   required: true,
  //   trim: true,
  //   minLength: 1 // TODO: find out length of tankId
  // }
})
// Setting 'Test' model using testSchema
let test = mongoose.model('test', testSchema);
// Exporting for use in server.js
module.exports = test;