import fs from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
  const remove = 'fileToRemove.txt';
  const files = `files`;
  const errorMsg = 'FS operation failed';

  try {
    const dir = await fs.readdir(path.join(__dirname, files));
    if (!dir.includes(remove)) throw new Error(errorMsg);
    else fs.rm(path.join(__dirname, files, remove));
  } catch {
    throw new Error(errorMsg);
  }
};

await remove();