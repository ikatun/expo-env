import { executeExpo } from './execute-expo';
import { publish } from './publish';
import { copyEnvFiles } from './copy-env-files';

export interface IBuildIosOpts {
  skipPublish?: boolean;
}

export function buildIos(args: string[], opts: IBuildIosOpts = {}) {
  const [envName, ...restOfArgs] = args;
  if (!envName) {
    throw new Error('Usage: expo-env build:ios env-name ...args...');
  }
  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env build:ios env-name ...args...');
  }

  copyEnvFiles(envName);

  if (opts.skipPublish) {
    executeExpo(['publish', '-c', '--release-channel', envName]);
  }
  executeExpo(['build:ios', '--no-publish', '--release-channel', envName, ...restOfArgs]);
}
