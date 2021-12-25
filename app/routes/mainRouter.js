const express = require('express');
const routesVersioning = require('express-routes-versioning')();

const router = express.Router();

router.use(
  '/user',
  routesVersioning({
    '^1.0.0': require('./v1/user'),
  }),
);
module.exports = router;
