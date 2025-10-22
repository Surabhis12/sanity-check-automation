#!/usr/bin/env bash
set -e

echo "Running ESLint on sample-code/js..."

# Ensure node_modules exists locally
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Ensure ESLint is available locally
if ! npx --no-install eslint -v >/dev/null 2>&1; then
  echo "Installing ESLint..."
  npm install eslint @eslint/js --save-dev
fi

echo "ESLint installed. Running checks..."

# Use npx to call the local ESLint binary
npx eslint sample-code/js --max-warnings=0 || {
  echo "❌ ESLint check failed."
  exit 1
}

echo "✅ ESLint check passed successfully."
