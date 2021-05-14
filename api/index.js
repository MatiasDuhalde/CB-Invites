const express = require('express');
const cors = require('cors');

require('dotenv').config();

const invitesRouter = require('./routes/invitesRouter');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routers
app.use(invitesRouter);

app.listen(3005, () => {
  console.log('Listening...');
});
