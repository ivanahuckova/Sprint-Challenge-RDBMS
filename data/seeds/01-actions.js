exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        { action_id: 1, project_id: 1, action_description: 'Description of action nr. 1', action_notes: 'Notes about action 1', completed: false },
        { action_id: 2, project_id: 1, action_description: 'Description of action nr. 2', action_notes: 'Notes about action 2', completed: false },
        { action_id: 3, project_id: 1, action_description: 'Description of action nr. 3', action_notes: 'Notes about action 3', completed: false },
        { action_id: 4, project_id: 2, action_description: 'Description of action nr. 4', action_notes: 'Notes about action 4', completed: false },
        { action_id: 5, project_id: 3, action_description: 'Description of action nr. 5', action_notes: 'Notes about action 5', completed: false },
        { action_id: 6, project_id: 4, action_description: 'Description of action nr. 6', action_notes: 'Notes about action 6', completed: false }
      ]);
    });
};
