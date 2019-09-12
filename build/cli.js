"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _localLogin = require("./services/local-login");

var _executeExpo = require("./services/execute-expo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function executeCli() {
  (0, _localLogin.localLogin)();
  (0, _executeExpo.executeExpo)(_lodash.default.drop(process.argv, 2));
}

executeCli();