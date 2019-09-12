"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localLogin = localLogin;

var _executeExpo = require("./execute-expo");

var _readJson2 = require("./read-json");

function localLogin() {
  const _readJson = (0, _readJson2.readJson)('expo-env/credentials.json'),
        username = _readJson.username,
        password = _readJson.password;

  (0, _executeExpo.executeExpo)(['logout'], {
    ignoreOutput: true
  });
  (0, _executeExpo.executeExpo)(`login -u ${username} -p ${password} --non-interactive`.split(' '), {
    ignoreOutput: true
  });
}