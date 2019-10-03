"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementAndroidVersionCode = incrementAndroidVersionCode;

var _lodash = _interopRequireDefault(require("lodash"));

var _readJson = require("./read-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function incrementAndroidVersionCode() {
  const appJson = (0, _readJson.readJson)('app.json');
  const existingVersionCode = _lodash.default.get(appJson, 'expo.android.versionCode') || 1;
  const nextVersionCode = parseInt(existingVersionCode) + 1;

  _lodash.default.set(appJson, 'expo.android.versionCode', nextVersionCode);

  (0, _readJson.writeJson)(appJson, 'app.json');
}