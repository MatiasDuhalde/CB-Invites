const pool = require('../config/pool');
const { getUsers, insertInvites } = require('./utils/queries');
const { generateInviteLinkCode } = require('../routes/utils/utils');

const wrapper = async () => {
  const users = await getUsers();

  const invites = [];
  users.forEach(user => {
    // .5 chance of generating at least one invite
    if (Math.random() < 0.5) {
      // randomly generate between one and three (uniform prob)
      const invitesNumber = Math.random() * 3 + 1;
      for (let i = 0; i < invitesNumber; i++) {
        invites.push({
          userId: user.id,
          code: generateInviteLinkCode(user),
        });
      }
    }
  });

  await insertInvites(invites);
};

wrapper();
