import "dotenv/config";
import Discord from "discord.js";
import { getBotToken, getBotId, getMessage } from "./utils.mjs";
import cron from "node-cron";

async function task() {
  console.log("--- do task ---", new Date().toLocaleTimeString());

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

const job = cron.schedule("* * * * *", task, {
  scheduled: false,
  timezone: "Asia/Bangkok",
});

(() => {
  job.start();
})();
