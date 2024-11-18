#!/bin/bash

# Script da criação das depedencias do NPM do projeto

npm install typescript prettier --save-dev
npm install react react-dom
npm install
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
node --eval "fs.writeFileSync('.prettierignore','')"
npx tsc --init
