import { copyFileSync } from 'fs';

export function safeCopy(src: string, dest: string) {
  try {
    copyFileSync(src, dest);
    return true;
  } catch (e) {
    return false;
  }
}
