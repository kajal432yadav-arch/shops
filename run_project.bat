@echo off
echo Starting ShopVerse Backend...
start cmd /k "npm run start-server"

echo Starting ShopVerse Frontend...
start cmd /k "npm run start-client"

echo Both client and server are starting up.
