// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    unseNullAsDefault: true,
    connection: {
      filename: './dev/challenge.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};