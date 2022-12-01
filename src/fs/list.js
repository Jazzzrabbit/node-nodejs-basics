import fs from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
  const files = `files`;
  const errorMsg = 'FS operation failed';
  let dir;

  try {
    dir = await fs.readdir(path.join(__dirname, files));
    console.table(dir);
  } catch {
    throw new Error(errorMsg);
  }
};

await list();