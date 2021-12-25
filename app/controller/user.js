const service = require('../service/user');
const { Success, NoContent } = require('../framework/response/success/successes');
const { InternalServerError } = require('../framework/response/error/errors');

module.exports.getUserById = async (req, res, next) => {
  const user = req.params.id;
  console.log('id', req.params.id);
  try {
    const { message, data, code } = await service.getUser(user);
    if (code === 0) {
      return next(new Success(message, data));
    }
    return next(new NoContent(message));
  } catch (err) {
    console.log(err);
    return next(new InternalServerError(req));
  }
};
