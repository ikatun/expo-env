"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _localLogin = require("./services/local-login");

var _executeExpo = require("./services/execute-expo");

var _publish = require("./services/publish");

var _buildIos = require("./services/build-ios");

var _buildAndroid = require("./services/build-android");

var _buildEverything = require("./services/build-everything");

var _start = require("./services/start");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function executeCli() {
  (0, _localLogin.localLogin)();

  const _$drop = _lodash.default.drop(process.argv, 2),
        _$drop2 = _toArray(_$drop),
        firstArg = _$drop2[0],
        restOfArgs = _$drop2.slice(1);

  if (firstArg === 'publish') {
    (0, _publish.publish)(restOfArgs);
  } else if (firstArg === 'build:android') {
    (0, _buildAndroid.buildAndroid)(restOfArgs);
  } else if (firstArg === 'build:ios') {
    (0, _buildIos.buildIos)(restOfArgs);
  } else if (firstArg === 'build:everything') {
    (0, _buildEverything.buildEverything)(restOfArgs);
  } else if (firstArg === 'start') {
    (0, _start.start)(restOfArgs);
  } else {
    (0, _executeExpo.executeExpo)([firstArg, ...restOfArgs]);
  }
}

try {
  executeCli();
} catch (e) {
  const message = e.message;

  if (message.startsWith('Usage')) {
    console.error(message);
  } else {
    throw e;
  }
}