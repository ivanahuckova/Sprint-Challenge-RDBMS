exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments('project_id');
    table.string('project_name', 128).notNullable();
    table.string('project_description', 256);
    table.boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
