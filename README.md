# drop-please

notify everyone for drop card

> previous solution [branch old](https://github.com/jungai/drop-please/tree/old)

> required node that supported **esm** (node >= 14.7)

## With Docker

> required BOT_ID, BOT_TOKEN, CRON_STR

```bash
docker run \
  -e BOT_ID=BOT_ID \
  -e BOT_TOKEN=BOT_TOKEN \
  -e CRON_STR=CRON_STR \
  kittn888/drop-karuta-please
```

## Setup

- install deps via **npm**, **yarn**, **pnpm** (recommend **pnpm**)

## Run in local

1. create a new `.env` in root project copy `env` template

or

```bash
cat env > .env
```

2. create a discord webhook and replace id & token

3. run scripts `task` for execute function
