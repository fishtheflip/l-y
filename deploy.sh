#!/usr/bin/env sh

set -e 

npm run build

cd dist 

gitinit 
git add -A 
git comit -m 'new'
git push -f https://github.com/fishtheflip/l-y.git/ master:ph-pages

cd -