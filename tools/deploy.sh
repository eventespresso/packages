#!/bin/bash

################################### INSTRUCTIONS ########################################
#                      This script accepts upto 5 arguments                             #
#---------------------------------------------------------------------------------------#
# # |                    Description                    | REQUIRED |      DEFAULT       #
#---------------------------------------------------------------------------------------#
# 1 | target repository name e.g. "event-espresso-core" |    YES   |         -          #
# 2 | username of the target repository                 |    NO    |  "eventespresso"   #
# 3 | build path on the current/this repository         |    NO    |      "build"       #
# 4 | branch to deploy at, in the target repository     |    NO    |   "barista-prod"   #
# 5 | path to assets folder on the target repository    |    NO    |      "assets"      #
#########################################################################################

##################################### EXAMPLES ##########################################
# ./deploy.sh "event-espresso-core"                                                     #
# ./deploy.sh "event-espresso-core" "eventespresso"                                     #
# ./deploy.sh "event-espresso-core" "eventespresso" "build"                             #
# ./deploy.sh "event-espresso-core" "eventespresso" "build" "barista-prod"              #
# ./deploy.sh "event-espresso-core" "eventespresso" "build" "barista-prod" "assets/dist"#
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
# GitHub account username
USERNAME="${2:-eventespresso}"
# Default path to build folder
BUILD_PATH="${3:-build}"
# The target repo branch
BRANCH="${4:-barista-prod}"
# Default path to assets folder (on target repo)
ASSETS_PATH="${5:-assets}"
# This repo
THIS="${5:-assets/dist}"

BASE=$(pwd)

# the source commit SHA with repo URL
SOURCE_COMMIT="${GITHUB_REPOSITORY}@${GITHUB_SHA}"

git config --global user.email "$GIT_USER_EMAIL"
git config --global user.name "$GIT_USER_NAME"

echo "  Repo: $REPO"
CLONE_DIR="__${REPO}__clone__"
echo "  Clone dir: $CLONE_DIR"

# make sure the directory is empty
rm -rf $CLONE_DIR/*

# clone the repo branch
git clone -b $BRANCH https://$API_TOKEN_GITHUB@github.com/$USERNAME/$REPO.git $CLONE_DIR

## DEPLOY I18N ##
## make sure languages directory exists
mkdir -p $CLONE_DIR/languages
# paths of the translation files
PHP_I18N_FILE="$CLONE_DIR/languages/event_espresso-js-translations.php"
JS_I18N_FILE="$BASE/$BUILD_PATH/js-translations.pot"
# make sure the file exists
touch $I18N_FILE
# Convert POT file to PHP
npx pot-to-php $JS_I18N_FILE $I18N_FILE event_espresso
# Remove POT file
rm $JS_I18N_FILE

# goto the repo directory
cd $CLONE_DIR

# clean the assets path.
rm -rf $ASSETS_PATH/*

# Make sure the directory exists
mkdir -p $ASSETS_PATH

# copy files from build folder to target assets folder
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
