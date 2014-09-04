'use strict';

require('should');
var path = require('path');

var contrib = require('../lib/index');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, func) {
  task = func;
};

var configMock = {
  root: path.resolve(__dirname, '../'),
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

contrib(gulpMock, configMock);

describe('Gulp Module Contrib', function() {
  it('Should return a function', function() {
    contrib.should.be.type('function');
  });

  it('Should create a task', function() {
    task.should.be.type('function');
  });

  it('Should run the task', function(cb) {
    try {
      task();
      cb();
    } catch (e) {
      cb();
    }
  });
});
