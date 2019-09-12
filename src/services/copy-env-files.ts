import { safeCopy } from './safe-copy';

export function copyEnvFiles(envName: string) {
  let envExists = safeCopy(`expo-env/${envName}.env`, '.env');
  envExists = safeCopy(`expo-env/${envName}.env.json`, 'env.json') || envExists;
  if (!envExists) {
    throw new Error(`Usage: missing expo-env/${envName}.env or expo-env/${envName}.env.json files`);
  }
}
