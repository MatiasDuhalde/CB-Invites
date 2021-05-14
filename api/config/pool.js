const { Pool } = require('pg');

const config = require('./db')[process.env.NODE_ENV || 'development'];

module.exports = new Pool(config);
