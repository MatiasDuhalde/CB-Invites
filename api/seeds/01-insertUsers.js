const { generateRandomUsers } = require('./utils/utils');
const { insertUsers } = require('./utils/queries');

module.exports = async () => {
  const exampleUsers = generateRandomUsers(100);
  insertUsers(exampleUsers);
};
