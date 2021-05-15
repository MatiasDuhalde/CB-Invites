const { getUsers, getInviteLinks, insertInvites } = require('./utils/queries');

module.exports = async () => {
  const users = await getUsers();
  const inviteLinks = await getInviteLinks();

  const invites = [];
  users.forEach(user => {
    // .9 chance a user was created via an invite
    if (Math.random() < 0.9) {
      // select random invite (except an invite made by same user)
      const randomInvite =
        inviteLinks[Math.floor(Math.random() * inviteLinks.length)];

      invites.push({
        inviterId: randomInvite.userId,
        invitedId: user.id,
        inviteLinkId: randomInvite.id,
      });
    }
  });

  await insertInvites(invites);
};
