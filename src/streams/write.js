import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
  const files = 'files';
  const file = 'fileToWrite.txt';

  try {
    const writeStream = fs.createWriteStream(path.join(__dirname, files, file));
    console.log('Type something. It will be saved in ./files/fileToWrite.txt. \nPress ctrl+c to exit.');
    process.stdin
      .on('data', data => {
        writeStream.write(data.toString());
      });
  } catch(e) {
    console.error(e);
  }
};

await write();