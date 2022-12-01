import fs from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
  const remove = 'fileToRemove.txt';
  const files = `files`;
  const errorMsg = 'FS operation failed';
  let dir;

  try {
    dir = await fs.readdir(path.join(__dirname, files));
  } catch {
    throw new Error(errorMsg);
  }

  if (!dir.includes(remove)) throw new Error(errorMsg);
  else {
    fs.rm(path.join(__dirname, files, remove));
  }
};

await remove();