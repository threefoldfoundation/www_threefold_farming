

set -e
cd /Users/kristinevilnite/codewww/github/threefoldfoundation/www_threefold_farming

#need to ignore errors for getting nvm not sure why
set +e
source /Users/kristinevilnite/.publisher/nvm.sh

set -e
nvm use --lts

export PATH=/Users/kristinevilnite/.publisher/versions/node/v15.8.0/bin:$PATH

set +e
gridsome build

set -e

mkdir -p /Users/kristinevilnite/.publisher/publish/www_threefold_farming
rsync -ra --delete /Users/kristinevilnite/codewww/github/threefoldfoundation/www_threefold_farming/dist/ /Users/kristinevilnite/.publisher/publish/www_threefold_farming/

cd /Users/kristinevilnite/codewww/github/threefoldfoundation/www_threefold_farming/dist

#echo go to http://localhost:9999/
 #python3 -m http.server 9999

