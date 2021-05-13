DROP DATABASE IF EXISTS cb_invites_development;
DROP USER IF EXISTS currencybird;


CREATE USER currencybird WITH PASSWORD 'password';
CREATE DATABASE cb_invites_development WITH OWNER='currencybird';
