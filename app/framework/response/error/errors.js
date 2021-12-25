// eslint-disable-next-line max-classes-per-file
const {
  INTERNAL_SERVER_ERROR,
  BAD_REQUEST,
  UNAUTHORIZED,
  UNPROCESSABLE_ENTITY,
  NOT_FOUND,
} = require('../../httpCodes');
const { GeneralError } = require('./generalError');

class BadRequest extends GeneralError {
  constructor(message, data = undefined) {
    super(message, BAD_REQUEST, data);
  }
}

class InternalServerError extends GeneralError {
  constructor(req, data = undefined) {
    super('CommonError.InternalServerError', INTERNAL_SERVER_ERROR, data);
  }
}

class Unauthorized extends GeneralError {
  constructor(message, data = undefined) {
    super(message, UNAUTHORIZED, data);
  }
}

class UnprocessableEntity extends GeneralError {
  constructor(message, data = undefined) {
    super(message, UNPROCESSABLE_ENTITY, data);
  }
}

class NotFound extends GeneralError {
  constructor(message, data = undefined) {
    super(message, NOT_FOUND, data);
  }
}

/**
 *
 * @type {{
 * BadRequest: BadRequest,
 * Unauthorized: Unauthorized,
 * GeneralError: GeneralError,
 * InternalServerError: InternalServerError,
 * UnprocessableEntity: UnprocessableEntity,
 * NotFound:NotFound,
 * }}
 */
module.exports = {
  Unauthorized,
  InternalServerError,
  BadRequest,
  GeneralError,
  UnprocessableEntity,
  NotFound,
};
