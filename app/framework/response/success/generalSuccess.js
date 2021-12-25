class GeneralSuccess {
  constructor(message, statusCode, data = undefined) {
    console.log('statusCode', statusCode);
    console.log('data', data);
    console.log('message', message);
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}

/**
 *
 * @type {{GeneralSuccess: GeneralSuccess}}
 */
module.exports = {
  GeneralSuccess,
};
