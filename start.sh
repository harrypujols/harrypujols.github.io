#!/bin/bash
npm run ensure-docker
npm run server:boot

# Trap Ctrl+C (SIGINT) and run cleanup
trap 'echo "Stopping containers..."; npm run server:stop; exit' SIGINT

# Start Jekyll server (foreground)
npm run server

# Cleanup after server exits
npm run server:stop