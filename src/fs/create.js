import fs from 'fs/promises';

const create = async () => {
  const path = './files';
  const file = 'fresh.txt';
  const msg = 'I am fresh and young';
  const errorMsg = 'FS operation failed';
  const dir = await fs.readdir(path);
  if (dir.includes(file)) throw new Error(errorMsg);
  else fs.writeFile(`${path}/${file}`, msg);
};

await create();