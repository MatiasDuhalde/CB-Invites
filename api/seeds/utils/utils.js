const faker = require('faker');

const generateRandomUser = () => {
  const randomDate = faker.date.between('2010-04-30', '2021-04-30');

  return {
    email: faker.internet.email(),
    fullName: faker.name.findName(),
    sex: Math.floor(Math.random() * 3),
    address: `${faker.address.streetAddress(
      Math.floor(Math.random() * 2),
    )}, ${faker.address.city()}, ${faker.address.country()}`,
  };
};

const generateRandomUsers = (n = 1) => {
  const users = [];
  for (let i = 0; i < n; i += 1) {
    users.push(generateRandomUser());
  }
  return users;
};

module.exports = {
  generateRandomUser,
  generateRandomUsers,
};
