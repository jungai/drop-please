import "dotenv/config";
import Discord from "discord.js";
import { getBotToken, getBotId, getMessage } from "./utils.mjs";

(async () => {
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
})();
