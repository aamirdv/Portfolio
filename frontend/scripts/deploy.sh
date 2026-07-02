#!/usr/bin/env bash
set -euo pipefail

npm run build

cd dist
git init
git checkout -b gh-pages
git add -A
git commit -m "deploy $(date +%Y-%m-%d)"
git push -f "git@github.com:aamirdv/Portfolio.git" gh-pages
