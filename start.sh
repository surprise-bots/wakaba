#!/bin/bash

# I am not fucking bothered to fuck with ENTRYPOINTS and shit so here's a script. Enjoy.

echo "BOT TOKEN: " $BOT_TOKEN
/usr/bin/git pull
/usr/local/bin/node bot.js