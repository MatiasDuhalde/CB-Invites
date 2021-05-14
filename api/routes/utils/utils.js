const md5 = require('md5');

const validateEmail = email => {
  const re = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/g;
  return re.test(email);
};

const validateSex = sex => {
  return [0, 1, 2].includes(sex);
};

const validateNotEmpty = string => {
  return !!string;
};

const validateUser = user => {
  return (
    validateEmail(user.email) &&
    validateSex(user.sex) &&
    validateNotEmpty(user.address) &&
    validateNotEmpty(user.fullName)
  );
};

const generateInviteLinkCode = user => {
  return md5(`${user.id}${Date.now()}${user.id}`);
};

module.exports = {
  validateEmail,
  validateSex,
  validateNotEmpty,
  validateUser,
  generateInviteLinkCode,
};
