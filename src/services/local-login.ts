import { executeExpo } from './execute-expo';
import { readJson } from './read-json';

interface ILoginData {
  username: string;
  password: string;
}

export function localLogin() {
  const { username, password } = readJson<ILoginData>('expo-env/credentials.json');
  executeExpo(['logout'], { ignoreOutput: true });
  executeExpo(`login -u ${username} -p ${password} --non-interactive`.split(' '), { ignoreOutput: true });
}
