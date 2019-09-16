import fs from 'fs';
import { spawn, spawnSync } from 'child_process';
import { trim } from 'lodash';

export function downloadBuild(type: 'ipa' | 'apk') {
  if (type !== 'ipa' && type !== 'apk') {
    throw new Error('Invalid type');
  }

  const getUrl = spawnSync('./node_modules/.bin/expo', [`url:${type}`]);
  const url = trim(getUrl.stdout.toString());
  const curlCommand = spawn('curl', ['-L', '-S', url], { stdio: ['inherit', 'pipe', 'inherit'] });
  const outputStream = fs.createWriteStream(type === 'ipa' ? 'ios.ipa' : 'android.apk');

  return new Promise((resolve, reject) => {
    curlCommand.stdout.pipe(outputStream, { end: true });
    curlCommand.on('end', resolve);
    curlCommand.on('close', resolve);
    curlCommand.on('error', reject);
  });
}
