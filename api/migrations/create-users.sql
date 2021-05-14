DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    sex SMALLINT NOT NULL DEFAULT 0,
    address TEXT,
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
)
