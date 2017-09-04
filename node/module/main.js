'use strict';

//引入hello模块用Node提供的require函数：
// 引入hello模块:
var greets = require('./hello');

var s = 'Michael';

greets(s); // Hello, Michael!