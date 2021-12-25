class GeneralError extends Error {
  constructor(message, statusCode, data = undefined) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

/**
 *
 * @type {{GeneralError: GeneralError}}
 */
module.exports = {
  GeneralError,
};
