## Action Steps:

1. Create index.js + api folder with server.js and routes.
1. Command `npx knex init`.
1. Create data folder where database, migrations and seeds are going to be storred.
1. In knexfile - we currently need only development, therefore remove other setup. Don't forget to add right path to database file, migrations folder and seeds folder.
1. To create table, use command `npx knex migrate:make NAME_OF_TABLE`.
1. In migration file that was created, return create table https://knexjs.org/#Schema-createTable and drop table if exists https://knexjs.org/#Schema-dropTableIfExists.
1. After all migrations are created, run command `npx knex migrate:latest` to create database and tables in database.
1. Next step is to create seed files with command `npx knex seed:make 01-NAME_OF_SEED`
1. Add the seeding data to the specific table.
1. Run seeding either with `npx knex seed:run` or `npx knex seed:run 01-NAME_OF_SEED`.
1. Go back to routes and connect the database via `const knexConfig = require('../../knexfile.js').development` and `const db = knex(knexConfig);`
