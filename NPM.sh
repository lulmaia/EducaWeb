#!/bin/bash

# Script da instalção das depedencias NPM do projeto

npm install typescript prettier --save-dev
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
node --eval "fs.writeFileSync('.prettierignore','')"
npx tsc --init
