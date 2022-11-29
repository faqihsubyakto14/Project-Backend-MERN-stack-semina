const mongoose = require('mongoose');

const { urlDb } = require('../config');

mongoose.connect(urlDb.toString());

const db = mongoose.connection;

module.exports = db;
