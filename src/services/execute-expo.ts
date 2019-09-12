import { spawnSync } from 'child_process';

interface IExecuteExpoOpts {
  ignoreOutput?: boolean
}

export function executeExpo(args: string[], opts: IExecuteExpoOpts = {}) {
  const stdio = opts.ignoreOutput ? 'ignore' : 'inherit';

  return spawnSync('./node_modules/.bin/expo', args, { stdio });
}
