exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, project_name: 'Project 1', project_description: 'Create project with id 1', completed: false },
        { id: 2, project_name: 'Project 2', project_description: 'Create project with id 2', completed: false },
        { id: 3, project_name: 'Project 3', project_description: 'Create project with id 3', completed: false },
        { id: 4, project_name: 'Project 4', project_description: 'Create project with id 4', completed: false },
        { id: 5, project_name: 'Project 5', project_description: 'Create project with id 5', completed: false },
        { id: 6, project_name: 'Project 6', project_description: 'Create project with id 6', completed: false }
      ]);
    });
};
