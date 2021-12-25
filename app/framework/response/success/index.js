/**
 *
 * @param success type of GeneralSuccess
 * @param req
 * @param res
 * @returns {*}
 */
module.exports.handleSuccess = (success, req, res) => {
  const { data, statusCode, message } = success;
  return res.status(statusCode).json({
    status: 'success',
    data: typeof data === 'string' ? req.t(data) : data,
    message: message ? req.t(message) : undefined,
    dataLength: data?.length > 0 ? data.length : undefined,
    statusCode,
  });
};
