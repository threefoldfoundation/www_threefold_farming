set -e
set +x

export NAME=threefold_farming

# INSTALL CRYSTAL TOOLS

sudo rm -rf `which ct`

case "$OSTYPE" in
  linux*) 
        sudo /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/crystaluniverse/crystaltools/master/tools/install.sh)"
        sudo chmod 777 /usr/local/bin/ct
        sudo npm install --global @gridsome/cli
        sudo npm install --global nvm
        ;;
  darwin*)
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/crystaluniverse/crystaltools/master/tools/install.sh)"
        brew update && brew install node
        npm install --global @gridsome/cli
        npm install --global nvm
        ;; 
esac

# GET REQUIRED REPOSITORIES
ct git pull -u git@github.com:threefoldfoundation/www_$NAME.git
ct git pull -u git@github.com:threefoldfoundation/data_threefold.git

# GO INTO CODE DIRECTORY
set -e
cd ~/code/github/threefoldfoundation/www_$NAME

# INSTALL GRIDSOME & DEPENDENCIES FOR GRIDSOME
rm -f yarn.lock
rm -rf node_modules
rm -rf .cache

export NVM_DIR="$HOME/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm use --lts

set +e

npm install 

source run.sh
