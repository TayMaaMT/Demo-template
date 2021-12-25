const { checkSchema } = require('express-validator');
const { isString, exists } = require('./errorMessages');

module.exports.getUserById = checkSchema({
  id: {
    in: 'params',
    exists,
    isString,
    optional: false,
  },
});
