import _ from 'lodash';
import { readJson, writeJson } from './read-json';

export function incrementIOSVersionCode() {
  const appJson = readJson<any>('app.json');

  const existingBuildNUmber = _.get(appJson, 'expo.ios.buildNumber') || '1';
  const nextBuildNumber = parseInt(existingBuildNUmber) + 1;
  _.set(appJson, 'expo.ios.buildNumber', nextBuildNumber.toString(10));

  writeJson(appJson, 'app.json');
}
