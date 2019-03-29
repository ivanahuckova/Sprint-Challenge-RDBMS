const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');

const server = express();

server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);

module.exports = server;
