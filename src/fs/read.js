import fs from 'fs/promises';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
  const files = `files`;
  const errorMsg = 'FS operation failed';
  const toRead = 'fileToRead.txt';

  try {
    await fs.readdir(path.join(__dirname, files));
    const content = await fs.readFile(path.join(__dirname, files, toRead), 'utf-8');
    console.log(content);
  } catch {
    throw new Error(errorMsg);
  }
};

await read();