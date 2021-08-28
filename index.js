import "dotenv/config";
import Discord from "discord.js";
import { getBotToken, getBotId, getMessage, getCronString } from "./utils.mjs";
import cron from "node-cron";

function checkEnvBeforeStart(envs = [getBotToken, getBotId, getCronString]) {
  return envs.reduce((_, fn) => fn(), "iu ❤️");
}

function checkIsValidCronStr(val = getCronString()) {
  if (cron.validate(val)) {
    return;
  }

  throw new Error("CRON_STR is not valid !!");
}

async function task() {
  console.log(
    "--- do task ---",
    new Date().toLocaleDateString(),
    "->",
    new Date().toLocaleTimeString()
  );

  // connect to discord
  const hook = new Discord.WebhookClient({
    id: getBotId(),
    token: getBotToken(),
  });

  //   embed things
  const embed = new Discord.MessageEmbed()
    .setTitle(`🚨 ${getMessage()}`)
    .setColor("#e74c3c");

  //   notify
  await hook.send({ embeds: [embed] });

  // destroy
  hook.destroy();
}

(() => {
  try {
    checkEnvBeforeStart();
    checkIsValidCronStr();

    cron.schedule(getCronString(), task, {
      timezone: "Asia/Bangkok",
    });
  } catch (error) {
    console.log("error -> ", error);
  }
})();
