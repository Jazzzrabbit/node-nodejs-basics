import fs from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
  const folder = 'files_copy';
  const files = `files`;
  const errorMsg = 'FS operation failed';

  try {
    const dir = await fs.readdir(path.join(__dirname, files));
    if (dir.includes(folder)) throw new Error(errorMsg);
    else {
      await fs.mkdir(path.join(__dirname, files, folder));
      dir.map(file => {
        fs.copyFile(path.join(__dirname, files, file), path.join(__dirname, files, folder, file))
      })
    }
  } catch {
    throw new Error(errorMsg);
  }
};

copy();