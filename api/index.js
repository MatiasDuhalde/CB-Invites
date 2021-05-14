const express = require('express');

require('dotenv').config();

const invitesRouter = require('./routes/invitesRouter');

const app = express();

// Middlewares
app.use(express.json());

// Routers
app.use(invitesRouter);

app.listen(3000, () => {
  console.log('Listening...');
});
