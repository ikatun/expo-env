"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readJson = readJson;
exports.writeJson = writeJson;

var _fs = require("fs");

function readJson(filePath) {
  return JSON.parse((0, _fs.readFileSync)(filePath, 'utf8'));
}

function writeJson(data, filePath) {
  (0, _fs.writeFileSync)(filePath, JSON.stringify(data, null, 2), {
    encoding: 'utf8'
  });
}