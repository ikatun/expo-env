import _ from 'lodash';

import { localLogin } from './services/local-login';
import { executeExpo } from './services/execute-expo';

function executeCli() {
  localLogin();
  executeExpo(_.drop(process.argv, 2));
}

executeCli();
