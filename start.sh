#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${CYAN}==================================================${NC}"
echo -e "${CYAN}             NexusHost Portfolio Project          ${NC}"
echo -e "${CYAN}==================================================${NC}"
echo ""
echo -e "To start the development server, run: ${GREEN}./start-dev.sh${NC}"
echo ""
echo -e "Key URLs:"
echo -e "  ${YELLOW}Main Site:${NC}     ${GREEN}http://localhost:3000${NC}"
echo -e "  ${YELLOW}Dashboard:${NC}     ${GREEN}http://localhost:3000/dashboard${NC}"
echo -e "  ${YELLOW}Login Demo:${NC}    ${GREEN}http://localhost:3000/login${NC}"
echo ""
echo -e "Project Information:"
echo -e "  - Modern web hosting platform demo"
echo -e "  - Built with Next.js 15 and Tailwind CSS"
echo -e "  - Features responsive design and dark/light mode"
echo -e "  - Includes complete customer dashboard"
echo ""
echo -e "For more information, see: ${GREEN}README.md${NC} and ${GREEN}DASHBOARD.md${NC}"
echo -e "${CYAN}==================================================${NC}"
