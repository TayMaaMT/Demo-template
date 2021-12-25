const fs = require('fs');

/**
 * Trim string values only
 * @param {*} value
 */
module.exports.trim = (value) => (typeof value === 'string' ? value.trim() : value);

/**
 * Takes an object and trims its string values
 * @param {object} object
 */
module.exports.optimize = (object) => {
  const newObject = { ...object };
  Object.keys(newObject).forEach((key) => {
    if (typeof newObject[key] === 'string') {
      newObject[key] = this.trim(newObject[key]);
    }
  });
  return newObject;
};

/**
 * Build a response object
 * @param {any} value - value to check if null or undefined or empty
 */
module.exports.isNullOrUndefinedOrEmpty = (value) => value === '' || value === null || value === undefined;

/**
 *
 * @param string
 * @returns {number}
 */
module.exports.parseToNumber = (string) => parseInt(string, 10);

/**
 *
 * @param str
 * @returns {*}
 */
module.exports.camelize = (str) => (this.isNullOrUndefinedOrEmpty(str)
  ? str
  : str.replace(/^\w|[A-Z]|\b\w|\s+/g, (match, index) => {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  }));

/**
 *
 * @returns {string}
 */
module.exports.getRandomString = () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  for (let i = 0; i < 3; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

/**
 *
 * @param path
 */
module.exports.deleteFile = (path) => fs.unlinkSync(path);
