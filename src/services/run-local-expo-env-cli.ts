import fs from 'fs';
import path from 'path';

const localCliPath = path.join(process.cwd(), 'node_modules/.bin/expo-env');

export function runLocalExpoEnv() {
  if (!fs.existsSync(localCliPath)) {
    return false;
  }

  require(localCliPath);
  return true;
}
