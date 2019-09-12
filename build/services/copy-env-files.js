"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyEnvFiles = copyEnvFiles;

var _safeCopy = require("./safe-copy");

function copyEnvFiles(envName) {
  let envExists = (0, _safeCopy.safeCopy)(`expo-env/${envName}.env`, '.env');
  envExists = (0, _safeCopy.safeCopy)(`expo-env/${envName}.env.json`, 'env.json') || envExists;

  if (!envExists) {
    throw new Error(`Usage: missing expo-env/${envName}.env or expo-env/${envName}.env.json files`);
  }
}