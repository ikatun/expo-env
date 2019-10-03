"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildIos = buildIos;

var _executeExpo = require("../services/execute-expo");

var _copyEnvFiles = require("../services/copy-env-files");

var _downloadBuild = require("../services/download-build");

var _incrementIosVersionCode = require("../services/increment-ios-version-code");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function buildIos(_x) {
  return _buildIos.apply(this, arguments);
}

function _buildIos() {
  _buildIos = _asyncToGenerator(function* (args, opts = {}) {
    const _args = _toArray(args),
          envName = _args[0],
          restOfArgs = _args.slice(1);

    if (!envName) {
      throw new Error('Usage: expo-env build:ios env-name ...args...');
    }

    if (envName.startsWith('-')) {
      throw new Error('Usage: expo-env build:ios env-name ...args...');
    }

    (0, _copyEnvFiles.copyEnvFiles)(envName);
    (0, _incrementIosVersionCode.incrementIOSVersionCode)();

    if (!opts.skipPublish) {
      (0, _executeExpo.executeExpo)(['publish', '-c', '--release-channel', envName]);
    }

    (0, _executeExpo.executeExpo)(['build:ios', '--no-publish', '--release-channel', envName, ...restOfArgs]);
    yield (0, _downloadBuild.downloadBuild)('apk');
  });
  return _buildIos.apply(this, arguments);
}