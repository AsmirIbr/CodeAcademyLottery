'use strict';


/**
 * Add a new code to the lottery
 *
 * body Codes Code object that needs to be added to the lottery
 * no response value expected for this operation
 **/
exports.addCode = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a code
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteCode = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find Code by status
 *
 * status Long Find Code by status
 * returns Codes
 **/
exports.findByStatus = function(status) {
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
 * Find Code by code
 *
 * code String Find Code by code
 * no response value expected for this operation
 **/
exports.findCodeByCode = function(code) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find code by ID
 *
 * id Integer Find code by id
 * returns Codes
 **/
exports.getCodeById = function(id) {
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
 * List all Codes
 *
 * returns List
 **/
exports.listAllCodes = function() {
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
 * Update an existing code
 *
 * id Integer Code Id that need to be updated
 * body Codes Updated code object (optional)
 * no response value expected for this operation
 **/
exports.updateCode = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

