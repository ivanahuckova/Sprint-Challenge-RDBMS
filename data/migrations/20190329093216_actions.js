exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments('action_id');
    table.string('action_description', 128).notNullable();
    table.string('action_notes', 256);
    table.boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
