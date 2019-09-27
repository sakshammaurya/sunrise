#!/bin/bash

if [ "$TRAVIS_REPO_SLUG" == "commercetools/commercetools-sunrise-theme" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ] && [ "$TRAVIS_BRANCH" == "master" ] ; then

    export SPLIT_REPO=https://${GH_TOKEN}@github.com/sakshammaurya/sunrise-theme
    export LAST_LOG_ENTRY=`git log --pretty=format:%B -1`

    git config --global user.email "sammaurya843@gmail.com"
    git config --global user.name "sakshammaurya"

    grunt build-composer

    OUT=$(mktemp -d ${HOME}/output.XXXXXXXXXX)
    REPO=$(mktemp -d ${HOME}/theme.XXXXXXXXXX)
    cp -R composer/* ${OUT}

    cd ${HOME}
    git clone --quiet ${SPLIT_REPO} ${REPO} > /dev/null 2>&1

    cd ${REPO}
    git rm -rf .
    cp -Rf ${OUT}/* .
    git add -A .

    git status
    git commit -m "${LAST_LOG_ENTRY}"
    git push origin master > /dev/null 2>&1

    rm -rf ${OUT}
    rm -rf ${REPO}
fi
