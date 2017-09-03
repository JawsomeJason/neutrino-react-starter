#!/bin/bash
# run this from an empty directory named as the new repo you want
# e.g.
# $ cd .. && mkdir new-repo && cd new-repo
# $ bash ../neutrino-react-starter/fork.sh

REPO=${PWD##*/}
git init
hub create -d "Forked from github.com/thejase/neutrino-react-starter" $REPO
git remote add upstream https://github.com/thejase/neutrino-react-starter.git
git pull upstream master
