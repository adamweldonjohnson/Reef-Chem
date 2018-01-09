'use strict';
// Require statements
const mongoose = require('mongoose');
// Setting up schema and storing as variable
let tanksSchema = mongoose.Schema({
  // Storing the name of the tanks
  name: {
    // Stored as a string, disallows numbers
    type: String,
    // Requires a name be entered for a tank - this will be displayed on the frontend
    required: true,
    // Prevents erroneous characters
    trim: true,
    // Requires a minimum length of two characters in the name, allows for names such as 'Po', but not single letters
    minLength: 2,
    // Provides default name for display purposes (which the user will be able to later edit) in case the user does not choose to input a value.
    default: 'My Aquarium'
  },
  // Storing the size of the tank
  gallons: {
    // Only allows numbers, in case tank sizes are later needed for computation. Could possibly be selected from a dropdown selector on the front end.
    type: Number,
    // This is not required
    required: false,
    // This is trimmed
    trim: true,
    // Allows for very small aquariums, e.g. 3 gal reef tanks
    minLength: 1
  },
  // Storing the user ID for association with test data.
  userId: {
    // TODO: find out if type needs to be mixed or objectID. Unclear if OBJID is valid.
    type: String,
    // Required to allow association of test data with specific tank and user
    required: true,
    // Trimmed
    trim: true,
    // TODO: Find out if required or recommended.
    minLength: 20,
  }
})
// Setting 'Test' model using tankSchema
let Tanks = mongoose.model('Tanks', tanksSchema);
// Exporting for use in server.js
module.exports = Tanks;