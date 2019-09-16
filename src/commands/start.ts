import { executeExpo } from '../services/execute-expo';
import { copyEnvFiles } from '../services/copy-env-files';

export function start(args: string[]) {
  const [envName, ...restOfArgs] = args;
  if (!envName) {
    throw new Error('Usage: expo-env start env-name ...args...');
  }
  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env start env-name ...args...');
  }

  copyEnvFiles(envName);

  executeExpo(['start', ...restOfArgs]);
}
