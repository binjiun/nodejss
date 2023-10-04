const forever = require('forever-monitor');

const child = new forever.Monitor('index.js', {
  max: 1000,
  silent: true,
  uid: 'index',
});

child.on('exit', function () {
  console.log('app.js has exited after 1000 restarts');
});

child.start();