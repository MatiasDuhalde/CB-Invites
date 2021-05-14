const pool = require('../config/pool');
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

const exampleUsers = generateRandomUsers(100);

const insertUsers = async users => {
  try {
    const promises = users.map(user =>
      pool.query(
        'INSERT INTO users("fullName", email, sex, address) VALUES ($1,$2,$3,$4)',
        [user.fullName, user.email, user.sex, user.address],
      ),
    );
    await Promise.all(promises);
    return true;
  } catch (databaseError) {
    console.log(databaseError);
  }
  return false;
};

insertUsers(exampleUsers);
