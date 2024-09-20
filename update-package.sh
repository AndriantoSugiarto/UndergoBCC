#!/bin/bash

BASEPATH=$(dirname $0)
cd "$BASEPATH"

package_name='npm-check-updates'
if [[ "$(npm list -g $package_name)" =~ "empty" ]]; then
    echo "Installing $package_name ..."
    npm install -g $package_name
else
    echo "$package_name is already installed"
fi
ncu -u
npm i --legacy-peer-deps