"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildEverything = buildEverything;

var _buildIos = require("./build-ios");

var _buildAndroid = require("./build-android");

var _publish = require("./publish");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function buildEverything(_x) {
  return _buildEverything.apply(this, arguments);
}

function _buildEverything() {
  _buildEverything = _asyncToGenerator(function* (args) {
    const _args = _slicedToArray(args, 1),
          envName = _args[0];

    if (!envName) {
      throw new Error('Usage: expo-env build:everything env-name');
    }

    if (envName.startsWith('-')) {
      throw new Error('Usage: expo-env build:everything env-name');
    }

    (0, _publish.publish)([envName]);
    yield (0, _buildAndroid.buildAndroid)(args);
    yield (0, _buildIos.buildIos)(args, {
      skipPublish: true
    });
  });
  return _buildEverything.apply(this, arguments);
}