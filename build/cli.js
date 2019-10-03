"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _localLogin = require("./services/local-login");

var _executeExpo = require("./services/execute-expo");

var _publish = require("./commands/publish");

var _buildIos = require("./commands/build-ios");

var _buildAndroid = require("./commands/build-android");

var _buildEverything = require("./commands/build-everything");

var _start = require("./commands/start");

var _downloadBuild = require("./services/download-build");

var _runLocalExpoEnvCli = require("./services/run-local-expo-env-cli");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function executeCli() {
  return _executeCli.apply(this, arguments);
}

function _executeCli() {
  _executeCli = _asyncToGenerator(function* () {
    if ((0, _runLocalExpoEnvCli.runLocalExpoEnv)()) {
      console.log('executed local cli');
      return;
    }

    yield (0, _localLogin.localLogin)();

    const allArgs = _lodash.default.drop(process.argv, 2);

    const _allArgs = _toArray(allArgs),
          firstArg = _allArgs[0],
          restOfArgs = _allArgs.slice(1);

    if (firstArg === 'publish') {
      yield (0, _publish.publish)(restOfArgs);
    } else if (firstArg === 'build:android') {
      yield (0, _buildAndroid.buildAndroid)(restOfArgs);
    } else if (firstArg === 'build:ios') {
      yield (0, _buildIos.buildIos)(restOfArgs);
    } else if (firstArg === 'build:everything') {
      yield (0, _buildEverything.buildEverything)(restOfArgs);
    } else if (firstArg === 'start') {
      yield (0, _start.start)(restOfArgs);
    } else if (firstArg === 'download:ipa') {
      yield (0, _downloadBuild.downloadBuild)('ipa');
    } else if (firstArg === 'download:apk') {
      yield (0, _downloadBuild.downloadBuild)('apk');
    } else {
      (0, _executeExpo.executeExpo)(allArgs);
    }
  });
  return _executeCli.apply(this, arguments);
}

_asyncToGenerator(function* () {
  try {
    yield executeCli();
  } catch (e) {
    const message = e.message;

    if (message.startsWith('Usage')) {
      console.error(message);
    } else {
      throw e;
    }
  }
})();