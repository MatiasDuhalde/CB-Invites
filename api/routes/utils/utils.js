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

const generateInviteLink = () => {
  return 'QWEASD';
};

module.exports = {
  validateEmail,
  validateSex,
  validateNotEmpty,
  validateUser,
  generateInviteLink,
};
