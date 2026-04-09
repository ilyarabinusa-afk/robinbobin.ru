#!/bin/bash
# Deploy robinbobin.ru to Beget hosting
# Usage: bash scripts/deploy.sh
# Runs on the n8n server (217.114.10.31) which has lftp access to Beget

set -e

SERVER="root@217.114.10.31"
BEGET_USER="ilyara3j"
BEGET_PASS='^saLes&12'
BEGET_HOST="ilyara3j.beget.tech"
BEGET_PATH="robinbobin.ru/public_html"
REPO_DIR="/opt/robinbobin.ru/repo"

echo "🚀 Deploying robinbobin.ru..."

# 1. Pull latest code on server
ssh $SERVER "
  if [ -d $REPO_DIR ]; then
    cd $REPO_DIR && git pull origin master
  else
    git clone https://github.com/ilyarabinusa-afk/robinbobin.ru.git $REPO_DIR
    cd $REPO_DIR
  fi
  cd $REPO_DIR && npm ci && npx vite build
"

# 2. Upload dist to Beget via lftp
ssh $SERVER "lftp -u $BEGET_USER,'$BEGET_PASS' -e 'set ftp:ssl-allow no; cd $BEGET_PATH; mirror -R $REPO_DIR/dist/ . --delete --verbose --exclude .git; quit' ftp://$BEGET_HOST"

echo "✅ Deploy complete!"
