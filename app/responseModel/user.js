module.exports.getUser = (user) => {
  const {
    _id, age, name, phone, random,
  } = user;
  console.log(phone);
  return {
    id: _id,
    information: {
      name,
      phone,
      age,
      random,
    },
  };
};
