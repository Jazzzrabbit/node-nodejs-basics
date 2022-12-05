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
        .on('message', data => res(data))
        .on('error', () => rej());
    }));
  }

  (await Promise.allSettled(workers)).map(({ status, value }) => console.log({
    'status': status === 'fulfilled' ? 'resolved' : 'error',
    'data': status === 'fulfilled' ? value : null
  }));
};

await performCalculations();