import { executeExpo } from '../services/execute-expo';
import { publish } from './publish';
import { copyEnvFiles } from '../services/copy-env-files';

export function buildAndroid(args: string[]) {
  const [envName, ...restOfArgs] = args;
  if (!envName) {
    throw new Error('Usage: expo-env build:android env-name ...args...');
  }
  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env build:android env-name ...args...');
  }

  copyEnvFiles(envName);

  executeExpo(['publish', '-c', '--release-channel', envName]);
  executeExpo(['build:android', '--no-publish', '--release-channel', envName, ...restOfArgs]);
}
