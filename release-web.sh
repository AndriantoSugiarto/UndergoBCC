#!/bin/bash

BASEPATH=$(dirname $0)
cd "$BASEPATH"

ionic build --prod -- --base-href https://undergocc.eccbridge.my.id/
npx angular-cli-ghpages --dir=www --cname=undergocc.eccbridge.my.id

