const express = require('express');
const knex = require('knex');

const knexConfig = require('../../knexfile.js').development;
const db = knex(knexConfig);

const routes = express.Router();

// ========== POST ROUTES ========== //
routes.post('/', async (req, res) => {
  try {
    const { project_id, action_description, action_notes } = req.body;
    if (project_id && action_description && action_notes) {
      const newAction = await db('actions').insert({ project_id, action_description, action_notes, completed: false });
      res.status(201).json(newAction[0]);
    } else {
      res.status(400).json({ message: 'You need to add project_id, action_description, action_notes' });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// ========== GET ROUTES ========== //
routes.get('/', async (req, res) => {
  try {
    const allActions = await db('actions');
    res.status(201).json(allActions);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = routes;
