'use strict';

var utils = require('../utils/writer.js');
var Draw = require('../service/DrawService');

module.exports.addDraw = function addDraw (req, res, next) {
  var id = req.swagger.params['id'].value;
  Draw.addDraw(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDrawById = function getDrawById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Draw.getDrawById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAllDraw = function listAllDraw (req, res, next) {
  Draw.listAllDraw()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
