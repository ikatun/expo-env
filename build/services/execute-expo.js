"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeExpo = executeExpo;

var _child_process = require("child_process");

function executeExpo(args, opts = {}) {
  const stdio = opts.ignoreOutput ? 'ignore' : 'inherit';
  return (0, _child_process.spawnSync)('./node_modules/.bin/expo', args, {
    stdio
  });
}