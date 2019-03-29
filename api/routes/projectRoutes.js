const express = require('express');
const knex = require('knex');

const knexConfig = require('../../knexfile.js').development;
const db = knex(knexConfig);

const routes = express.Router();

// ========== POST ROUTES ========== //
routes.post('/', async (req, res) => {
  try {
    const { project_name, project_description } = req.body;
    if (project_name && project_description) {
      const newProject = await db('projects').insert({ project_name, project_description, completed: false });
      res.status(201).json(newProject[0]);
    } else {
      res.status(400).json({ message: 'You need to add project_name and project_description' });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// ========== GET ROUTES ========== //
routes.get('/', async (req, res) => {
  try {
    const allProjects = await db('projects');
    res.status(201).json(allProjects);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

routes.get('/:id', async (req, res) => {
  try {
    const specificProjectObject = await db
      .select('project_id AS id', 'project_name AS name', 'project_description AS description', 'completed')
      .from('projects')
      .where({ project_id: req.params.id })
      .first();

    const specificProject = {
      ...specificProjectObject,
      completed: specificProjectObject.completed === 0 ? false : true
    };

    const actionsOfProjectArray = await db
      .select('action_id AS id', 'action_description AS description', 'action_notes AS notes', 'completed')
      .from('actions')
      .where({ project_id: req.params.id });

    const actionsOfProject = actionsOfProjectArray.map(action => ({
      ...action,
      completed: action.completed === 0 ? false : true
    }));

    res.status(200).json({
      ...specificProject,
      actions: actionsOfProject
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = routes;
