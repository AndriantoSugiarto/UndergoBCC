#!/bin/bash

BASEPATH=$(dirname $0)
cd "$BASEPATH"

git checkout build/main
git pull
git merge main --no-edit -X theirs
ionic build --prod -- --base-href https://eccbridge.my.id/
npx angular-cli-ghpages --dir=httpdocs
if [ $? -eq 0 ]; then
	cp htaccess httpdocs/.htaccess
	git add httpdocs/
	git commit -m "Build production"
	git push
fi
git checkout main
