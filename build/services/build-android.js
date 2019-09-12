"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildAndroid = buildAndroid;

var _executeExpo = require("./execute-expo");

var _copyEnvFiles = require("./copy-env-files");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function buildAndroid(args) {
  const _args = _toArray(args),
        envName = _args[0],
        restOfArgs = _args.slice(1);

  if (!envName) {
    throw new Error('Usage: expo-env build:android env-name ...args...');
  }

  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env build:android env-name ...args...');
  }

  (0, _copyEnvFiles.copyEnvFiles)(envName);
  (0, _executeExpo.executeExpo)(['publish', '-c', '--release-channel', envName]);
  (0, _executeExpo.executeExpo)(['build:android', '--no-publish', '--release-channel', envName, ...restOfArgs]);
}