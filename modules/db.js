'use strict';

const db = require('../models');

const mongoose = require('mongoose');
// connect with mongo DB with mongoose.connect
mongoose.Promise = Promise; // mongo came out before Promise is a thing, this will make mongoose use the default JS promise
mongoose.connect("mongodb://localhost/nyt-react"); // no need to use Robo 3T to manually make it

module.exports = db;