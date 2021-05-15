const { getUsers, insertInviteLinks } = require('./utils/queries');
const { generateInviteLinkCode } = require('../routes/utils/utils');

module.exports = async () => {
  const users = await getUsers();

  const inviteLinks = [];
  users.forEach(user => {
    // .5 chance of generating at least one invite
    if (Math.random() < 0.5) {
      // randomly generate between one and three (uniform prob)
      const invitesNumber = Math.random() * 3 + 1;
      for (let i = 0; i < invitesNumber; i++) {
        inviteLinks.push({
          userId: user.id,
          code: generateInviteLinkCode(user),
        });
      }
    }
  });

  await insertInviteLinks(inviteLinks);
};
