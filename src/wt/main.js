import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const performCalculations = async () => {
  const file = 'worker.js';
  const filename = path.join(__dirname, file);
  const threads = os.cpus().length;
  const workers = [];
  
  for (let i = 0; i < threads; i++) {
    workers.push(new Promise((res, rej) => {
      const worker = new Worker(filename, { workerData: 10 + i });
      worker
        .on('message', data => res({ 
          'status': 'resolved',
          'data': data 
        }))
        .on('error', () => rej({
          'status': 'error',
          'data': null
        }));
    }));
  }

  await Promise.all(workers).then(data => console.log(data));
};

await performCalculations();