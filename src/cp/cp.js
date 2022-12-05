import { fork } from 'child_process';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const spawnChildProcess = async (args) => {
  const files = 'files';
  const file = 'script.js';
  const fileName = path.join(__dirname, files, file);
  const child = fork(fileName, args);
  child.on('error', err => console.error(err));
  child.on('close', () => console.log('Child process finished its work.'));
};

spawnChildProcess(['Type in to get a response', 'Type CLOSE to exit']);