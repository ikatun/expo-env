"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementIOSVersionCode = incrementIOSVersionCode;

var _lodash = _interopRequireDefault(require("lodash"));

var _readJson = require("./read-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function incrementIOSVersionCode() {
  const appJson = (0, _readJson.readJson)('app.json');
  const existingBuildNUmber = _lodash.default.get(appJson, 'expo.ios.buildNumber') || '1';
  const nextBuildNumber = parseInt(existingBuildNUmber) + 1;

  _lodash.default.set(appJson, 'expo.ios.buildNumber', nextBuildNumber.toString(10));

  (0, _readJson.writeJson)(appJson, 'app.json');
}