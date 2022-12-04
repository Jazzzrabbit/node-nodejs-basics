import { fork } from 'child_process';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const spawnChildProcess = async (args) => {
  const files = 'files';
  const file = 'script.js';
  const fileName = path.join(__dirname, files, file);
  const child = fork(fileName, args);
  child.on('close', () => console.log('Don`t worry, be happy and sleep more!'));
};

spawnChildProcess(['Type anything to get a response from master process.', 'Type CLOSE to exit.']);