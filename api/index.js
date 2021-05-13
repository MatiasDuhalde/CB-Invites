const express = require('express');
const { Pool } = require('pg');

require('dotenv').config();

const config = require('./config/db')[process.env.NODE_ENV || 'development'];
const invitesRouter = require('./routes/invitesRouter');

const pool = new Pool(config);

const app = express();

// Middlewares
app.use(express.json());

// Routers
app.use(invitesRouter);

app.listen(3000, () => {
  console.log('Listening...');
});
