const parseArgs = () => {
  const args = process.argv;
  const regex = /--/gi;
  const output = [];
  args.map((arg, i) => {
    if (arg.match(regex)) output.push(arg.slice(2) + ' is ' + args[i + 1]);
  });
  console.log(output.join(', '));
};

parseArgs();