#!/usr/bin/env zx

(async () => {
  const { name, version } = await fs.readJSON(__dirname + "/../package.json");
  const imageName = `${name}:${version}`;
  const platform = ["linux/amd64", "linux/arm64"];

  platform.forEach(async (arch) => {
    await $`docker buildx build --platform ${arch} -t ${imageName}-${
      arch.split("/")[1]
    } .`;
  });
})();
