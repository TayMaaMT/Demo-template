/**
 *
 * @param err type of GeneralError
 * @param req
 * @param res
 * @returns {*}
 */
module.exports.handleError = (err, req, res) => {
  const { statusCode, message, data } = err;
  if (typeof message === 'string') {
    return res.status(statusCode).json({
      status: 'failed',
      data: data
        ? {
          key: null,
          message: req.t(message),
          data,
          handler_type: 'message',
          title: null,
        }
        : [
          {
            key: null,
            message: req.t(message),
            data,
            handler_type: 'message',
            title: null,
          },
        ],
      statusCode,
    });
  }
  if (typeof message === 'object') {
    let parsedMessage;
    try {
      parsedMessage = JSON.parse(message.message);
    } catch (e) {
      // ignore
    }
    if (
      Object.prototype.hasOwnProperty.call(message, 'msgKey')
      || (Object.prototype.hasOwnProperty.call(message, 'message') && parsedMessage)
    ) {
      return res.status(statusCode).json({
        status: 'failed',
        data: [
          {
            key: null,
            message: req.t(
              message.msgKey || JSON.parse(message.message).msgKey,
              message.replacementTags || JSON.parse(message.message).replacementTags,
            ),
            data,
            handler_type: 'message',
            title: null,
          },
        ],
        statusCode,
      });
    }
    let key;
    let resMessage;
    let handlerType;
    let title;
    if (Array.isArray(message)) {
      key = message[0].key;
      resMessage = message[0].message;
      handlerType = message[0].handler_type;
      title = message[0].title;
    } else {
      key = message.key;
      resMessage = message.resMessage || message.message;
      handlerType = message.handlerType || message.handler_type;
      title = message.title;
    }
    return res.status(statusCode).json({
      status: 'failed',
      data: [
        {
          key,
          message: req.t(resMessage),
          handler_type: handlerType,
          title: req.t(title),
        },
      ],
      statusCode,
    });
  }
  return res.status(statusCode).json({
    status: 'failed',
    data: req.t(message),
    statusCode,
  });
};
