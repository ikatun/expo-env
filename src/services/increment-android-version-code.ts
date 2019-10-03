import _ from 'lodash';
import { readJson, writeJson } from './read-json';

export function incrementAndroidVersionCode() {
  const appJson = readJson<any>('app.json');

  const existingVersionCode = _.get(appJson, 'expo.android.versionCode') || 1;
  const nextVersionCode = parseInt(existingVersionCode) + 1;
  _.set(appJson, 'expo.android.versionCode', nextVersionCode);

  writeJson(appJson, 'app.json');
}
