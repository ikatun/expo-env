import { readJson, writeJson } from '../services/read-json';
import { executeExpo } from '../services/execute-expo';
import slug from 'slug';
import { copyEnvFiles } from '../services/copy-env-files';

function slugifyName(name: string) {
  return slug(name.replace(/\./i, '-'));
}

export function publish(args: string[]) {
  const [envName, ...restOfArgs] = args;
  if (!envName) {
    throw new Error('Usage: expo-env publish env-name ...args...');
  }
  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env publish env-name ...args...');
  }

  const appJson = readJson<any>('app.json');
  appJson.expo.name = `${appJson.expo.name}-${envName}`;
  appJson.expo.slug = slugifyName(`${appJson.expo.slug}-${envName}`);
  writeJson(appJson, 'app.tmp.json');

  copyEnvFiles(envName);

  executeExpo(['publish', '-c', '--config', 'app.tmp.json', ...restOfArgs]);
}
