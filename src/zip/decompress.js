import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const decompress = async () => {
  const files = 'files';
  const file = 'decompressedFileToCompress.txt';
  const compressed = 'archive.gz';
  const isExist = () => {
    try {
      fs.access(path.join(__dirname, files, compressed), fs.F_OK, err => {
        if (err) console.error(err);
      });
      return true;
    } catch {
      return false;
    }
  }
  
  if (isExist()) {
    const read = fs.createReadStream(path.join(__dirname, files, compressed));
    const write = fs.createWriteStream(path.join(__dirname, files, file));
    const decompress = zlib.createGunzip();
    const asyncPipeline = promisify(pipeline);
    await asyncPipeline(read, decompress, write);
  } else console.log('There is no file to unzip.');
};

await decompress();