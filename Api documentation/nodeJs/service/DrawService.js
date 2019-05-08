'use strict';


/**
 * Add a new draw
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.addDraw = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find Draw by id
 *
 * id Long 
 * returns List
 **/
exports.getDrawById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all Draw
 *
 * returns List
 **/
exports.listAllDraw = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

