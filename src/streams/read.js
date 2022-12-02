import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
  const files = 'files';
  const file = 'fileToRead.txt';

  try {
    const opened = await fs.open(path.join(__dirname, files, file));
    const stream = opened.createReadStream();
    stream
      .on('data', chunk => process.stdout.write(chunk))
      .on('end', () => {
        process.stdout.write('\n');
        stream.destroy();
      });
  } catch(e) {
    console.error(e);
  }
};

await read();