#!/bin/bash

################################### INSTRUCTIONS ########################################
#                      This script accepts upto 5 arguments                             #
#---------------------------------------------------------------------------------------#
# # |                    Description                    | REQUIRED |      DEFAULT       #
#---------------------------------------------------------------------------------------#
# 1 | target repository name e.g. "event-espresso-core" |    YES   |         -          #
# 2 | branch to deploy at, in the target repository     |    NO    |       "dev"        #
# 3 | path to assets folder on the target repository    |    NO    |      "assets"      #
# 4 | username of the target repository                 |    NO    |  "eventespresso"   #
# 5 | build path on the current/this repository         |    NO    |      "build"       #
#########################################################################################

##################################### EXAMPLES ##########################################
# ./deploy.sh "event-espresso-core"                                                     #
# ./deploy.sh "event-espresso-core" "dev"                                               #
# ./deploy.sh "event-espresso-core" "dev" "assets/dist"                                 #
# ./deploy.sh "event-espresso-core" "dev" "assets/dist" "eventespresso"                 #
# ./deploy.sh "event-espresso-core" "dev" "assets/dist" "eventespresso" "build"         #
#########################################################################################

##################### ENV VARIABLES THAT SHOULD ALREADY BE SET ########################
#-------------------------------------------------------------------------------------#
#             Name            |                       Description                     #
#-------------------------------------------------------------------------------------#
# API_TOKEN_GITHUB            | Github access token                                   #
# GIT_USER_EMAIL              | Email of the git user to use for commits              #
# GIT_USER_NAME               | Name of the git user to use for commits               #
#######################################################################################

####################### DEFAULT ENV VARIABLES SET BY GITHUB ###########################
# @link https://docs.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables
# 1. GITHUB_REPOSITORY
# 2. GITHUB_SHA

set -e

# name of the repo e.g. "event-espresso-core"
REPO=$1
# The target repo branch
BRANCH="${2:-dev}"
# Convert "refs/heads/dev" to "dev"
BRANCH="${BRANCH#refs/heads/}"
# Default path to assets folder (on target repo)
ASSETS_PATH="${3:-assets}"
# GitHub account username
USERNAME="${4:-eventespresso}"
# Default path to build folder
BUILD_PATH="${5:-build}"

BASE=$(pwd)

# the source commit SHA with repo URL
SOURCE_COMMIT="${GITHUB_REPOSITORY}@${GITHUB_SHA}"

git config --global user.email "$GIT_USER_EMAIL"
git config --global user.name "$GIT_USER_NAME"

echo "  Repo: $REPO"
CLONE_DIR="__${REPO}__clone__"
echo "  Clone dir: $CLONE_DIR"

# make sure the directory is empty
rm -rf $CLONE_DIR

# clone the repo branch
git clone -b $BRANCH git@github.com:$USERNAME/$REPO.git $CLONE_DIR

## DEPLOY I18N ##
# paths of the translation files
PHP_I18N_FILE="$CLONE_DIR/languages/event_espresso-translations-js.php"
JS_I18N_FILE="$BASE/$BUILD_PATH/js-translations.pot"

# If DEPLOY_I18N is not set to "no"
if [ "$DEPLOY_I18N" != "no" ]; then
	## make sure languages directory exists
	mkdir -p $CLONE_DIR/languages
	# make sure the file exists
	touch $PHP_I18N_FILE
	# Convert POT file to PHP
	echo "Converting pot to PHP..."
	npx pot-to-php $JS_I18N_FILE $PHP_I18N_FILE event_espresso
fi

# Remove POT file
echo "Remove JS pot file"
rm $JS_I18N_FILE

# goto the repo directory
cd $CLONE_DIR

# clean the assets path.
echo "Clean up assets path..."
rm -rf $ASSETS_PATH/static/*
rm -f $ASSETS_PATH/asset-manifest.json

# Make sure the directory exists
mkdir -p $ASSETS_PATH

# copy files from build folder to target assets folder
echo "Copy build files to assets path..."
cp -r $BASE/$BUILD_PATH/* $ASSETS_PATH/

# Commit if there is anything to
if [ -n "$(git status --porcelain)" ]; then
	echo  "  Committing to $REPO"
	# Stage all files
	git add .
	# add source commit to track the deployment source
	git commit --message "Deployed from $SOURCE_COMMIT"
	echo  "  Completed commit to $REPO"

	echo  "  Force pushing to $BRANCH branch on $REPO"
	git push -f origin $BRANCH
else
	echo "  No changes"
fi

# go back to base directory
cd $BASE
