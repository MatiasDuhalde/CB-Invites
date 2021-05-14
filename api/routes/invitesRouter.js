const express = require('express');
const {
  getUserByEmail,
  getInviteLinkByCode,
  getRanking,
  insertUser,
  insertInvite,
  insertInviteLink,
} = require('./utils/queries');
const { validateUser, validateEmail } = require('./utils/utils');

const router = express.Router();

router.get('/ranking', async (req, res) => {
  try {
    ranking = (await getRanking()).rows;
    return res.json(ranking);
  } catch (err) {
    return res.json({
      error: 'No se pudo obtener el ranking de usuarios.',
    });
  }
});

router.post('/user', async (req, res) => {
  const { fullName, email, sex, address, inviteCode } = req.body;
  const userData = { fullName, email, sex: parseInt(sex), address };
  if (!validateUser(userData)) {
    return res.json({
      error: 'Datos de usuario inválidos.',
    });
  }
  // Revisar código de invitación
  let inviteLink;
  try {
    if (inviteCode) {
      inviteLink = (await getInviteLinkByCode(inviteCode)).rows[0];
      if (!inviteLink) {
        return res.json({
          error:
            'El código de invitación es inválido. No se ha creado la cuenta.',
        });
      }
    }
  } catch (err) {
    return res.json({
      error:
        'No se pudo validar el código de invitación. No se ha creado la cuenta.',
    });
  }
  // Revisar si usuario ya existe
  let user;
  try {
    user = (await insertUser(userData)).rows[0];
  } catch (err) {
    return res.json({
      error: 'El correo ingresado ya existe.',
    });
  }
  const out = { user };
  // aceptar invitación
  if (user && inviteLink) {
    const inviteData = {
      inviterId: inviteLink.userId,
      invitedId: user.id,
      inviteLinkId: inviteLink.id,
    };
    const invite = (await insertInvite(inviteData)).rows[0];
    out.invite = invite;
  }
  return res.json(out);
});

router.post('/invite', async (req, res) => {
  const { email, fullName } = req.body;
  if (!validateEmail(email)) {
    return res.json({
      error: 'El correo ingresado es inválido.',
    });
  }
  // Ver si correo existe
  try {
    const queryData = await getUserByEmail(email);
    const user = queryData.rows[0];
    if (!user) {
      return res.json({
        error: 'El correo no se encuentra registrado.',
      });
    }
    if (user.fullName === fullName) {
      const resultingInvite = (await insertInviteLink(user)).rows[0];
      return res.json(resultingInvite);
    } else {
      return res.json({
        error: 'El nombre proporcionado no corresponde al correo.',
      });
    }
  } catch (err) {
    return res.json({
      error: 'No se pudo efectuar la operación.',
    });
  }
});
// curl -H "Content-Type: application/json" -X POST -d '{"fullName": "Test User", "email": "testuser@gmail.com", "sex":1, "address": "Test Address"}' localhost:3000/user
//
module.exports = router;
