const express = require('express');
// const config = require('config');
const { getUserById } = require('../../validationSchema/user');
const controller = require('../../controller/user');
const { validateRequest } = require('../../framework/validation');
// const { isAuthenticatedRole } = require('../../framework/middleware/auth');

const router = express.Router();

router.get('/:id', [getUserById, validateRequest], controller.getUserById);

module.exports = router;
