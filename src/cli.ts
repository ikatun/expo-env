import _ from 'lodash';

import { localLogin } from './services/local-login';
import { executeExpo } from './services/execute-expo';
import { publish } from './services/publish';
import { buildIos } from './services/build-ios';
import { buildAndroid } from './services/build-android';
import { buildEverything } from './services/build-everything';
import { start } from './services/start';

function executeCli() {
  localLogin();
  const [firstArg, ...restOfArgs] = _.drop(process.argv, 2);

  if (firstArg === 'publish') {
    publish(restOfArgs);
  } else if (firstArg === 'build:android') {
    buildAndroid(restOfArgs);
  } else if (firstArg === 'build:ios') {
    buildIos(restOfArgs)
  } else if (firstArg === 'build:everything') {
    buildEverything(restOfArgs);
  } else if (firstArg === 'start') {
    start(restOfArgs);
  } else {
    executeExpo([firstArg, ...restOfArgs]);
  }
}

try {
  executeCli();
} catch (e) {
  const { message } = e;
  if (message.startsWith('Usage')) {
    console.error(message);
  } else {
    throw e;
  }
}
