import fs from 'fs/promises';
import crypto from 'crypto';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
  const files = 'files';
  const file = 'fileToCalculateHashFor.txt';

  try {
    const content = await fs.readFile(path.join(__dirname, files, file));
    const hash = crypto.createHash('sha256').update(content);
    const hex = hash.digest('hex');
    console.log(hex);
  } catch(e) {
    console.error(e);
  }
};

await calculateHash();