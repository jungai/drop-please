# drop-please

notify everyone for drop card

> required node that supported **esm** (node >= 14.7)

## Note

decide to use **gitlab ci** because

1. github action schedule cron not triggering at the right time (delay) [issue](https://stackoverflow.com/questions/65132563/why-is-github-actions-workflow-scheduled-with-cron-not-triggering-at-the-right-t)

2. bitbucket pipelines can't customize cron (e.g. 0,30 3-17 * * *)

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
