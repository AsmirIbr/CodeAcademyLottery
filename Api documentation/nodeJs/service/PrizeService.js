'use strict';


/**
 * Add a new prize
 *
 * body Prize Prize object that needs to be added
 * no response value expected for this operation
 **/
exports.addPrize = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a Prize
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deletev = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find prize by id
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.getPrizeById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List all Prize
 *
 * returns List
 **/
exports.listAllPrizes = function() {
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
 * Update an existing Prize
 *
 * id Integer Prize Id that need to be updated
 * body Prize Updated prize object (optional)
 * no response value expected for this operation
 **/
exports.updatePrize = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

