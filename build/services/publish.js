"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = publish;

var _readJson = require("./read-json");

var _executeExpo = require("./execute-expo");

var _slug = _interopRequireDefault(require("slug"));

var _copyEnvFiles = require("./copy-env-files");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function slugifyName(name) {
  return (0, _slug.default)(name.replace(/\./i, '-'));
}

function publish(args) {
  const _args = _toArray(args),
        envName = _args[0],
        restOfArgs = _args.slice(1);

  if (!envName) {
    throw new Error('Usage: expo-env publish env-name ...args...');
  }

  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env publish env-name ...args...');
  }

  const appJson = (0, _readJson.readJson)('app.json');
  appJson.expo.name = `${appJson.expo.name}-${envName}`;
  appJson.expo.slug = slugifyName(`${appJson.expo.slug}-${envName}`);
  (0, _readJson.writeJson)(appJson, 'app.tmp.json');
  (0, _copyEnvFiles.copyEnvFiles)(envName);
  (0, _executeExpo.executeExpo)(['publish', '-c', '--config', 'app.tmp.json', ...restOfArgs]);
}