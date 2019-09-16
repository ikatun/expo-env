"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadBuild = downloadBuild;

var _fs = _interopRequireDefault(require("fs"));

var _child_process = require("child_process");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function downloadBuild(type) {
  if (type !== 'ipa' && type !== 'apk') {
    throw new Error('Invalid type');
  }

  const getUrl = (0, _child_process.spawnSync)('./node_modules/.bin/expo', [`url:${type}`]);
  const url = (0, _lodash.trim)(getUrl.stdout.toString());
  const curlCommand = (0, _child_process.spawn)('curl', ['-L', '-S', url], {
    stdio: ['inherit', 'pipe', 'inherit']
  });

  const outputStream = _fs.default.createWriteStream(type === 'ipa' ? 'ios.ipa' : 'android.apk');

  return new Promise((resolve, reject) => {
    curlCommand.stdout.pipe(outputStream, {
      end: true
    });
    curlCommand.on('end', resolve);
    curlCommand.on('close', resolve);
    curlCommand.on('error', reject);
  });
}