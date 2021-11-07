#!/bin/bash

# I am not fucking bothered to fuck with ENTRYPOINTS and shit so here's a script. Enjoy.

/usr/bin/git pull
/usr/local/bin/node deploy-commands.js
/usr/local/bin/node bot.js