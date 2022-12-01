import fs from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
  const files = 'files';
  const wrong = 'wrongFilename.txt';
  const proper = 'properFilename.md';
  const errorMsg = 'FS operation failed';

  try {
    const dir = await fs.readdir(path.join(__dirname, files));
    if (dir.includes(proper) || !dir.includes(wrong)) throw new Error(errorMsg);
    else fs.rename(path.join(__dirname, files, wrong), path.join(__dirname, files, proper));
  } catch {
    throw new Error(errorMsg);
  }
};

await rename();