'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});



// 引入hello模块:

var greet = require('./hello');

var s = 'Michael';



server.listen(port, hostname, () => {
  greet.greet(s); // Hello, Michael!
  greet.age(s);
  greet.sex(s);
  process.nextTick(function () {
    console.log('nextTick callback!');
  });
  console.log('nextTick was set!');
});