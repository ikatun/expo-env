import { buildIos } from './build-ios';
import { buildAndroid } from './build-android';
import { publish } from './publish';

export async function buildEverything(args: string[]) {
  const [envName] = args;
  if (!envName) {
    throw new Error('Usage: expo-env build:everything env-name');
  }
  if (envName.startsWith('-')) {
    throw new Error('Usage: expo-env build:everything env-name');
  }

  publish([envName]);
  await buildAndroid(args);
  await buildIos(args, { skipPublish: true });
}
