#!/bin/bash

# Script to start the NexusHost development server with proper environment setup

# Colors for terminal output
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Clear the terminal
clear

# Print banner
echo -e "${CYAN}=================================================${NC}"
echo -e "${CYAN}           🚀 NexusHost Development Server       ${NC}"
echo -e "${CYAN}=================================================${NC}"

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed. Please install it and try again.${NC}"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2)
echo -e "${CYAN}Node.js version:${NC} ${GREEN}$NODE_VERSION${NC}"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Node modules not found. Installing dependencies...${NC}"
else
    echo -e "${CYAN}📦 Checking for updated dependencies...${NC}"
fi

# Install dependencies
npm install

# Check for port conflicts
PORT=3000
if lsof -i :$PORT &> /dev/null; then
    echo -e "${YELLOW}⚠️  Port $PORT is already in use. Attempting to free it...${NC}"
    kill $(lsof -t -i:$PORT) 2>/dev/null || true
    sleep 2
fi

# Start the development server
echo -e "\n${GREEN}🌐 Starting development server...${NC}"
echo -e "${CYAN}=================================================${NC}"
echo -e "📱 Access the site at: ${GREEN}http://localhost:3000${NC}"
echo -e "💻 Dashboard demo: ${GREEN}http://localhost:3000/dashboard${NC}"
echo -e "🔄 Press ${YELLOW}Ctrl+C${NC} to stop the server"
echo -e "${CYAN}=================================================${NC}\n"

# Run the development server
npm run dev
