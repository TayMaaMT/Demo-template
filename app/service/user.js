const usersResponseModel = require('../responseModel/user');
const usersModel = require('../model/user');

module.exports.getUser = async (userId) => {
  try {
    console.log(userId);
    let dbRes = await usersModel.findById(userId);
    console.log(dbRes);
    dbRes = {
      ...usersResponseModel.getUser(dbRes),
    };
    return { code: dbRes ? 0 : 1, data: dbRes };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
