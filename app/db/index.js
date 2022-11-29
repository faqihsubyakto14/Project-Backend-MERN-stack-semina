const mongoose = require('mongoose');

const { urlDb } = require('../config');

const url = urlDb.toString();
mongoose.connect(url);

const db = mongoose.connection;

module.exports = db;
