#!/usr/bin/env sh

set -e 

npm run build

cd dist 

git init 
git add -A 
git comit -m 'new'
git push -f https://github.com/fishtheflip/l-y.git/ master:gh-pages

cd -