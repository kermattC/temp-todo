-- CREATE DATABASE IF NOT EXISTS perntodo;

/* create the table with the following schema */
-- CREATE TABLE todo (
--     todo_id SERIAL PRIMARY KEY; /* serial increases primary key to keep the key unique */
--     description VARCHAR(255); /* just set a description with max 255 characters */
-- );
-- \c perntodo;

/* Checks if perntodo database exists. Since psql doesn't have a CREATE DATABSE IF NOT EXISTS  */ 
CREATE EXTENSION IF NOT EXISTS dblink;

DO $$
BEGIN
PERFORM dblink_exec('', 'CREATE DATABASE perntodo');
EXCEPTION WHEN duplicate_database THEN RAISE NOTICE '%, skipping', SQLERRM USING ERRCODE = SQLSTATE;
END
$$;


CREATE TABLE IF NOT EXISTS todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);