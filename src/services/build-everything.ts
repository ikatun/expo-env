import { buildIos } from './build-ios';
import { buildAndroid } from './build-android';
import { publish } from './publish';

export function buildEverything(args: string[]) {
  const [envName] = args;
  if (!envName) {
    throw new Error('Usage: expo-env build:everything env-name');
  }
  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env build:everything env-name');
  }

  publish([envName]);
  buildAndroid(args);
  buildIos(args, { skipPublish: true });
}
