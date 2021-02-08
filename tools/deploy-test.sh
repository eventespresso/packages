#!/bin/bash

################################### INSTRUCTIONS ########################################
#                      This script accepts upto 5 arguments                             #
#---------------------------------------------------------------------------------------#
# # |                    Description                    | REQUIRED |      DEFAULT       #
#---------------------------------------------------------------------------------------#
# 1 | target repository name e.g. "event-espresso-core" |    YES   |         -          #
# 2 | branch to deploy at, in the target repository     |    NO    |       "dev"        #
# 3 | username of the target repository                 |    NO    |  "eventespresso"   #
# 4 | build path on the current/this repository         |    NO    |      "build"       #
# 5 | path to assets folder on the target repository    |    NO    |      "assets"      #
#########################################################################################

##################################### EXAMPLES ##########################################
# ./deploy.sh "event-espresso-core"                                                     #
# ./deploy.sh "event-espresso-core" "dev"                                               #
# ./deploy.sh "event-espresso-core" "dev" "eventespresso"                               #
# ./deploy.sh "event-espresso-core" "dev" "eventespresso" "build"                       #
# ./deploy.sh "event-espresso-core" "dev" "eventespresso" "build" "assets/dist"         #
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
# GitHub account username
USERNAME="${3:-eventespresso}"
# Default path to build folder
BUILD_PATH="${4:-build}"
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

# go back to base directory
cd $BASE
