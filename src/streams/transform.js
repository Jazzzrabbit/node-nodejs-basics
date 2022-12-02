import { Transform, pipeline } from 'stream';

const transform = async () => {
  try {
    console.log('Type something. It will be reverted. Press ctrl+c to exit.')
    const read = process.stdin;
    const write = process.stdout;

    const reverse = new Transform({
      transform(chunk, encode, callback) {
        const string = chunk.toString().trim();
        const transformed = string.split('').reverse().join('');
        this.push(`${transformed}\n`);
        callback();
      }
    });

    pipeline(read, reverse, write, err => console.error(err));
  } catch(e) {
    console.error(e);
  }
};

await transform();