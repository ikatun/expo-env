"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeCopy = safeCopy;

var _fs = require("fs");

function safeCopy(src, dest) {
  try {
    (0, _fs.copyFileSync)(src, dest);
    return true;
  } catch (e) {
    return false;
  }
}