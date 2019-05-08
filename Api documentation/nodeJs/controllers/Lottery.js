'use strict';

var utils = require('../utils/writer.js');
var Lottery = require('../service/LotteryService');

module.exports.addLottery = function addLottery (req, res, next) {
  var body = req.swagger.params['body'].value;
  Lottery.addLottery(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLottery = function deleteLottery (req, res, next) {
  var id = req.swagger.params['id'].value;
  Lottery.deleteLottery(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLotteryById = function getLotteryById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Lottery.getLotteryById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAllLotteries = function listAllLotteries (req, res, next) {
  Lottery.listAllLotteries()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLottery = function updateLottery (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Lottery.updateLottery(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
