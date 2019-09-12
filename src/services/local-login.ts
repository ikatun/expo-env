import { readFileSync } from 'fs';
import path from 'path';
import { executeExpo } from './execute-expo';

function readJson<T>(filePath: string): T {
  return JSON.parse(readFileSync(path.join('expo-env', filePath), 'utf8'));
}

interface ILoginData {
  username: string;
  password: string;
}

export function localLogin() {
  const { username, password } = readJson<ILoginData>('credentials.json');
  executeExpo(`login -u ${username} -p ${password} --non-interactive`.split(' '), { ignoreOutput: true });
}
