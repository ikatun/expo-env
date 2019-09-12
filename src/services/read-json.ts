import { readFileSync, writeFileSync } from 'fs';

export function readJson<T>(filePath: string): T {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

export function writeJson(data: object, filePath: string) {
  writeFileSync(filePath, JSON.stringify(data, null, 2), { encoding: 'utf8' });
}
