const parseEnv = () => {
  const env = process.env;
  const regex = /rss_/gi;
  const output = [];
  Object.keys(env).forEach(key => {
    if (key.match(regex)) output.push(key + '=' + env[key]);
  });
  console.log(output.join('; '));
};

parseEnv();