'use strict';

var utils = require('../utils/writer.js');
var Codes = require('../service/CodesService');

module.exports.addCode = function addCode (req, res, next) {
  var body = req.swagger.params['body'].value;
  Codes.addCode(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCode = function deleteCode (req, res, next) {
  var id = req.swagger.params['id'].value;
  Codes.deleteCode(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findByStatus = function findByStatus (req, res, next) {
  var status = req.swagger.params['status'].value;
  Codes.findByStatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findCodeByCode = function findCodeByCode (req, res, next) {
  var code = req.swagger.params['code'].value;
  Codes.findCodeByCode(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCodeById = function getCodeById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Codes.getCodeById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAllCodes = function listAllCodes (req, res, next) {
  Codes.listAllCodes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCode = function updateCode (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Codes.updateCode(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
