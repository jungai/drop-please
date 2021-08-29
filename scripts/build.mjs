#!/usr/bin/env zx

(async () => {
  const { name } = await fs.readJSON(__dirname + "/../package.json");

  await $`echo ${name}`;
})();
