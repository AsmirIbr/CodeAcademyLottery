'use strict';


/**
 * Add a new lottery
 *
 * body Lottery Lottery object that needs to be added
 * no response value expected for this operation
 **/
exports.addLottery = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a lottery
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteLottery = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find lottery by id
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.getLotteryById = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List all Lotteries
 *
 * returns List
 **/
exports.listAllLotteries = function() {
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
 * Update an existing lottery
 *
 * id Integer Lottery Id that need to be updated
 * body Lottery Updated lottery object (optional)
 * no response value expected for this operation
 **/
exports.updateLottery = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

