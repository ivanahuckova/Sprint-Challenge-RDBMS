const server = require('./api/server');
const port = process.env.PORT || 9876;

server.listen(port, () => {
  console.log(`Server listenning at port ${port}`);
});
