'use strict';

var utils = require('../utils/writer.js');
var Prize = require('../service/PrizeService');

module.exports.addPrize = function addPrize (req, res, next) {
  var body = req.swagger.params['body'].value;
  Prize.addPrize(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletev = function deletev (req, res, next) {
  var id = req.swagger.params['id'].value;
  Prize.deletev(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPrizeById = function getPrizeById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Prize.getPrizeById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAllPrizes = function listAllPrizes (req, res, next) {
  Prize.listAllPrizes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePrize = function updatePrize (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Prize.updatePrize(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
