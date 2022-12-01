import fs from 'fs/promises';

const create = async () => {
  const path = './files';
  const file = 'fresh.txt';
  const dir = await fs.readdir(path);
  if (dir.includes(file)) throw new Error('FS operation failed');
  else fs.writeFile('./files/fresh.txt', 'I am fresh and young');
};

await create();