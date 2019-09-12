"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localLogin = localLogin;

var _fs = require("fs");

var _path = _interopRequireDefault(require("path"));

var _executeExpo = require("./execute-expo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readJson(filePath) {
  return JSON.parse((0, _fs.readFileSync)(_path.default.join('expo-env', filePath), 'utf8'));
}

function localLogin() {
  const _readJson = readJson('credentials.json'),
        username = _readJson.username,
        password = _readJson.password;

  (0, _executeExpo.executeExpo)(`login -u ${username} -p ${password} --non-interactive`.split(' '), {
    ignoreOutput: true
  });
}