const messages = [
  "ดรอปครับดรอป",
  "กด drop ได้แล้วจ้า",
  "drop ได้แล้วโว้ยยย",
  "ได้เวลา drop แล้วครับ 😃",
  "drop ดิคร้าบ 👊",
  "ดรอปนะจ๊ะ",
];

export function getEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`env ${name} is required`);
  }

  return value;
}

export function getCronString() {
  return getEnv("CRON_STR");
}

export function getBotId() {
  return getEnv("BOT_ID");
}

export function getBotToken() {
  return getEnv("BOT_TOKEN");
}

export function getUserId() {
  return getEnv("USER_ID");
}

export function getMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
