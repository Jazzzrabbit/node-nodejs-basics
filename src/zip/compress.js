import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const compress = async () => {
  const files = 'files';
  const file = 'fileToCompress.txt';
  const compressed = 'archive.gz';
  
  try {
    const readStream = fs.createReadStream(path.join(__dirname, files, file));
    const writeStream = fs.createWriteStream(path.join(__dirname, files, compressed));
    const compress = zlib.createGzip();
    const asyncPipeline = promisify(pipeline);
    await asyncPipeline(readStream, compress, writeStream);
  } catch(e) {
    console.error(e);
  }
};

await compress();