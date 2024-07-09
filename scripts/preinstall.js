if (!/pnpm/i.test(process.env.npm_execpath)) {
  console.error('Only pnpm is allowed to this repo as package manager.');
  console.warn(`If you don't have pnpm, install it via "npm i -g pnpm".`);
  console.warn('For more details, visit https://pnpm.io/ \n');
  process.exit(1);
}









































// if (!/pnpm/.test(process.env.npm_execpath)) {
//   console.error(`Only pnpm is allow for this repo as package manager.`);
//   console.warn(`If you don't have pnpm, install it via "npm i -g pnpm".`);
//   console.warn(`For more details, go to https://pnpm.io/.\n`);
//   process.exit(1)
// }
