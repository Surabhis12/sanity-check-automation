#!/bin/bash
set -e

# Directory containing JS code
JS_DIR="sample-code/js"

echo "Running ESLint on ${JS_DIR}..."

# Check if ESLint config exists
if [ ! -f "./eslint.config.js" ]; then
  echo "❌ ESLint configuration not found! Please add eslint.config.js in repo root."
  exit 1
fi

# Install ESLint locally if not present
if ! command -v eslint &> /dev/null; then
  echo "Installing ESLint..."
  npm install eslint@latest
fi

# Run ESLint
npx eslint "${JS_DIR}"

# Capture exit code
CODE=$?

if [ $CODE -eq 0 ]; then
  echo "✅ ESLint passed successfully."
else
  echo "❌ ESLint failed with exit code $CODE."
  exit $CODE
fi
