'use strict';

const mongoose = require('mongoose');

let tanksSchema = mongoose.Schema({

})

let Tanks = mongoose.model('Tanks', tanksSchema);

module.exports = Tanks;