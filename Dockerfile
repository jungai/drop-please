FROM node:16

WORKDIR /app

ENV TZ=Asia/Bangkok

RUN dpkg-reconfigure -f noninteractive tzdata

RUN echo "Asia/Bangkok" > /etc/timezone && \
    curl -f https://get.pnpm.io/v6.14.js | node - add --global pnpm


COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install

COPY . .

CMD ["pnpm", "task"]
