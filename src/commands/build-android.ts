import { executeExpo } from '../services/execute-expo';
import { publish } from './publish';
import { copyEnvFiles } from '../services/copy-env-files';
import { downloadBuild } from '../services/download-build';
import { incrementAndroidVersionCode } from '../services/increment-android-version-code';

export async function buildAndroid(args: string[]) {
  const [envName, ...restOfArgs] = args;
  if (!envName) {
    throw new Error('Usage: expo-env build:android env-name ...args...');
  }
  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env build:android env-name ...args...');
  }

  copyEnvFiles(envName);

  incrementAndroidVersionCode();

  executeExpo(['publish', '-c', '--release-channel', envName]);
  executeExpo(['build:android', '--no-publish', '--release-channel', envName, ...restOfArgs]);
  await downloadBuild('apk');
}
