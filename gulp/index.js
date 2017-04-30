'use strict';

const gulp  = require('gulp');
const fs    = require('fs');
const path  = require('path');
const tasks = fs.readdirSync('./gulp/tasks');

tasks.forEach((task) => {
  require(path.join(__dirname, 'tasks', task));
});
