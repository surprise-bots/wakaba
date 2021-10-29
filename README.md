# Random Node JS Bot

I'll add shit to it later. It's meant to be a nodejs rewrite of my discordpy bot, but I'm learning Node JS as I go.

Only switching to handle incoming audio.

Designed as one-bot-per-guild (hence the reliance on Guild ID for registering commands). I will eventually fix this but I am accepting pull requests to make this work.

## Docker

To run this in Docker, use the following Dockerfile:

```dockerfile
FROM node:17.0.1-buster

ENV BOT_TOKEN="your_token" \
    CLIENT_ID="your_bot_client_id" \
    GUILD_ID="your_guild_id"

WORKDIR /data

RUN apt -y update && apt -y upgrade && apt -y install git
RUN git clone https://github.com/surprise-bots/wakaba.git /data
RUN npm install discord.js @discordjs/rest @discordjs/builders discord-api-types

ENTRYPOINT [ "bash", "start.sh" ]
```

You will need to have created an Application in [https://discord.com/developers/]. Your application will require a bot.

- Your `BOT_TOKEN` is under Applications -> Your Application -> Bot -> Token
- Your `CLIENT_ID` is under Applications -> Your Application -> OAuth2 -> Client ID
- Your `GUILD_ID` is obtained from the Discord App. Settings -> Advanced -> Developer Mode. Then you right click on your guild and click "Copy Guild ID"

To get the correct invite link, browse to [https://discord.com/developers/] and go Applications -> Your Application -> OAuth2. You need to select the 'bot' and 'application.commands' scope, then scroll down to 'BOT PERMISSIONS' and click "Administrator' or tailor as needed.