const parseEnv = () => {
  const env = process.env;
  const regex = /rss_/gi;
  Object.keys(env).forEach(key => {
    if (key.match(regex)) console.log(key + '=' + env[key]);
  });
};

parseEnv();