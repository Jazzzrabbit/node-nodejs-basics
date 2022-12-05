import fs from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
  const files = 'files';
  const file = 'fresh.txt';
  const msg = 'I am fresh and young';
  const errorMsg = 'FS operation failed';

  try {
    const dir = await fs.readdir(path.join(__dirname, files));
    if (dir.includes(file)) throw new Error(errorMsg);
    else fs.writeFile(path.join(__dirname, files, file), msg);
  } catch {
    throw new Error(errorMsg);
  }
};

await create();