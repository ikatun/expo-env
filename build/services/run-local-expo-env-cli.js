"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runLocalExpoEnv = runLocalExpoEnv;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const localCliPath = _path.default.join(process.cwd(), 'node_modules/.bin/expo-env');

function runLocalExpoEnv() {
  if (!_fs.default.existsSync(localCliPath)) {
    return false;
  }

  require(localCliPath);

  return true;
}