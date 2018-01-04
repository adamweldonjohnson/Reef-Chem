'use strict';

const mongoose = require('mongoose');

let testSchema = mongoose.Schema({

})

let Test = mongoose.model('Test', testSchema);

module.exports = Test;