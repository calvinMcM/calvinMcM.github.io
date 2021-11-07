#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory

# Copy some key files into the dist folder to make them accessible from the github.
cp -r public dist/public
cp src/img/favicon.png dist/favicon.png

node_modules/.bin/gh-pages -d dist

cd -