DROP TABLE IF EXISTS invites CASCADE;

CREATE TABLE invites(
    "inviterId" INT REFERENCES users(id),
    "invitedId" INT REFERENCES users(id) UNIQUE,
    "inviteLinkId" INT REFERENCES "inviteLinks"(id),
    PRIMARY KEY("inviterId", "invitedId")
)
