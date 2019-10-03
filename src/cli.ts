import _ from 'lodash';

import { localLogin } from './services/local-login';
import { executeExpo } from './services/execute-expo';
import { publish } from './commands/publish';
import { buildIos } from './commands/build-ios';
import { buildAndroid } from './commands/build-android';
import { buildEverything } from './commands/build-everything';
import { start } from './commands/start';
import { downloadBuild } from './services/download-build';
import { runLocalExpoEnv } from './services/run-local-expo-env-cli';

async function executeCli() {
  if (runLocalExpoEnv()) {
    return;
  }

  await localLogin();
  const allArgs = _.drop(process.argv, 2);
  const [firstArg, ...restOfArgs] = allArgs;

  if (firstArg === 'publish') {
    await publish(restOfArgs);
  } else if (firstArg === 'build:android') {
    await buildAndroid(restOfArgs);
  } else if (firstArg === 'build:ios') {
    await buildIos(restOfArgs)
  } else if (firstArg === 'build:everything') {
    await buildEverything(restOfArgs);
  } else if (firstArg === 'start') {
    await start(restOfArgs);
  } else if (firstArg === 'download:ipa') {
    await downloadBuild('ipa');
  } else if (firstArg === 'download:apk') {
    await downloadBuild('apk');
  } else {
    executeExpo(allArgs);
  }
}

(async () => {
  try {
    await executeCli();
  } catch (e) {
    const {message} = e;
    if (message.startsWith('Usage')) {
      console.error(message);
    } else {
      throw e;
    }
  }
})();
