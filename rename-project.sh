#!/bin/bash

# Script to rename the project folder from mokohost-demo to nexushost

# Define paths
CURRENT_DIR="/Users/collins/Desktop/mokohost-demo"
NEW_DIR="/Users/collins/Desktop/nexushost"

# Check if the new directory already exists
if [ -d "$NEW_DIR" ]; then
  echo "Error: $NEW_DIR already exists. Please remove it first."
  exit 1
fi

# Create the new directory
mkdir -p "$NEW_DIR"

# Copy all files to the new directory
echo "Copying files to $NEW_DIR..."
cp -R "$CURRENT_DIR"/* "$NEW_DIR"/

# Make the script executable
chmod +x "$NEW_DIR/rename-project.sh"

echo "✅ Project successfully copied to $NEW_DIR"
echo "You can now work on the renamed project."
echo "Note: This script does not delete the original project directory."
