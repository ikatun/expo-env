import { executeExpo } from '../services/execute-expo';
import { publish } from './publish';
import { copyEnvFiles } from '../services/copy-env-files';
import { downloadBuild } from '../services/download-build';

export interface IBuildIosOpts {
  skipPublish?: boolean;
}

export async function buildIos(args: string[], opts: IBuildIosOpts = {}) {
  const [envName, ...restOfArgs] = args;
  if (!envName) {
    throw new Error('Usage: expo-env build:ios env-name ...args...');
  }
  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env build:ios env-name ...args...');
  }

  copyEnvFiles(envName);

  if (!opts.skipPublish) {
    executeExpo(['publish', '-c', '--release-channel', envName]);
  }
  executeExpo(['build:ios', '--no-publish', '--release-channel', envName, ...restOfArgs]);
  await downloadBuild('apk');
}
